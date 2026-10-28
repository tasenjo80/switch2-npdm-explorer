#!/usr/bin/env python3
"""Merge beetool NPDM JSON files into the NPDM Explorer schema.

beetool: https://github.com/alula/beetool
Usage:
    beetool --intype=npdm --json=main.json main.npdm
    python tools/import_beetool.py --input dumps/ --output data/npdm-metadata.json --merge

This importer accepts beetool JSON, not NPDM binaries. Use --merge to preserve
existing titles and fields beetool does not emit; use --force only for a full
replacement.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any, Iterable

HEX16 = re.compile(r"^[0-9a-f]{16}$")


def _hex_id(value: Any) -> str | None:
    if value is None:
        return None
    if isinstance(value, str):
        text = value.strip().lower()
        if text.startswith("0x"):
            text = text[2:]
        candidate = text
    else:
        try:
            candidate = f"{int(value):016x}"
        except (TypeError, ValueError):
            return None
    if not HEX16.fullmatch(candidate) or candidate == "0" * 16:
        return None
    return candidate


def _hex_perms(value: Any) -> str:
    if isinstance(value, str):
        text = value.strip().lower()
        if text.startswith("0x"):
            text = text[2:]
        if HEX16.fullmatch(text):
            return text
        return "0" * 16
    try:
        return f"{int(value or 0):016x}"
    except (TypeError, ValueError):
        return "0" * 16


def _string_list(value: Any) -> list[str]:
    if value is None:
        return []
    if isinstance(value, list):
        return sorted({str(item) for item in value})
    return [str(value)]


def _as_int(value: Any, default: int = 0) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def _flatten_kernel(capabilities: Any) -> dict:
    syscalls: set[int] = set()
    maps = 0
    irqs: set[int] = set()
    handle_table = None
    debug = None
    applet_type = None

    if not isinstance(capabilities, list):
        capabilities = []

    for capability in capabilities:
        if not isinstance(capability, dict):
            continue

        syscall_block = capability.get("syscalls")
        if isinstance(syscall_block, dict):
            for value in syscall_block.values():
                try:
                    syscalls.add(int(value))
                except (TypeError, ValueError):
                    pass
        elif isinstance(syscall_block, list):
            for value in syscall_block:
                try:
                    syscalls.add(int(value))
                except (TypeError, ValueError):
                    pass

        if "map_page" in capability or "map" in capability:
            maps += 1

        irq_pair = capability.get("irq_pair")
        if isinstance(irq_pair, list):
            for value in irq_pair:
                if value is None:
                    continue
                try:
                    irqs.add(int(value))
                except (TypeError, ValueError):
                    pass

        if "handle_table_size" in capability:
            handle_table = _as_int(capability.get("handle_table_size"))
        if "application_type" in capability:
            applet_type = _as_int(capability.get("application_type"))
        if isinstance(capability.get("debug_flags"), dict):
            debug = capability["debug_flags"]

    return {
        "syscalls": sorted(syscalls),
        "maps": maps,
        "irqs": sorted(irqs),
        "appletType": applet_type,
        "handleTable": handle_table,
        "debug": debug,
    }


def map_npdm(raw: dict, source_prefix: str = "dumps/system-code") -> dict | None:
    program_id = _hex_id(raw.get("title_id", raw.get("program_id")))
    if program_id is None:
        return None

    filesystem = raw.get("filesystem_access")
    if not isinstance(filesystem, dict):
        filesystem = {}
    kernel = _flatten_kernel(raw.get("kernel_capabilities"))

    return {
        "file": f"{source_prefix}/{program_id}/main.npdm",
        "name": str(raw.get("name") or raw.get("title_name") or "").strip("\x00 "),
        "programId": program_id,
        "is64Bit": bool(raw.get("is_64_bit", True)),
        "addressSpace": _as_int(raw.get("address_space_type"), 3),
        "mainThreadPriority": _as_int(raw.get("main_thread_priority")),
        "mainThreadCore": _as_int(raw.get("default_cpu_id")),
        "mainThreadStackSize": _as_int(raw.get("main_thread_stack_size")),
        "systemResourceSize": _as_int(raw.get("system_resource_size")),
        "version": _as_int(raw.get("version")),
        "productCode": str(raw.get("product_code") or ""),
        "fsPermissions": _hex_perms(filesystem.get("permissions", 0)),
        "hostsServices": _string_list(raw.get("service_host")),
        "usesServices": _string_list(raw.get("service_access")),
        "acidHostsServices": [],
        "kernel": kernel,
    }


def merge_modules(existing: list[dict], imported: Iterable[dict]) -> list[dict]:
    merged: dict[str, dict] = {}
    for module in existing:
        if not isinstance(module, dict):
            continue
        program_id = _hex_id(module.get("programId"))
        if program_id:
            merged[program_id] = module

    for module in imported:
        previous = merged.get(module["programId"], {})
        combined = {**previous, **module}
        # beetool does not emit these fields. Preserve values from an existing
        # dataset when the import has no replacement value.
        if not module.get("systemResourceSize") and previous.get("systemResourceSize"):
            combined["systemResourceSize"] = previous["systemResourceSize"]
        if not module.get("acidHostsServices") and previous.get("acidHostsServices"):
            combined["acidHostsServices"] = previous["acidHostsServices"]
        merged[module["programId"]] = combined

    return sorted(merged.values(), key=lambda item: item.get("programId", ""))


def load_documents(inputs: Iterable[str]) -> list[dict]:
    documents = []
    for value in inputs:
        path = Path(value)
        if path.is_dir():
            paths = sorted(path.rglob("*.json"))
        else:
            paths = [path]
        for file_path in paths:
            try:
                data = json.loads(file_path.read_text(encoding="utf-8"))
            except json.JSONDecodeError as exc:
                raise SystemExit(f"{file_path}: invalid JSON: {exc}") from exc
            if isinstance(data, list):
                documents.extend(item for item in data if isinstance(item, dict))
            elif isinstance(data, dict):
                documents.append(data)
    return documents


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", nargs="+", required=True)
    parser.add_argument("--output", default="data/npdm-metadata.json")
    parser.add_argument("--source-prefix", default="dumps/system-code")
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument(
        "--merge",
        action="store_true",
        help="merge into an existing dataset; preserves fields beetool does not emit",
    )
    mode.add_argument(
        "--force",
        action="store_true",
        help="overwrite an existing dataset without merging",
    )
    args = parser.parse_args()

    modules = {}
    skipped = 0
    for raw in load_documents(args.input):
        module = map_npdm(raw, args.source_prefix)
        if module is None:
            skipped += 1
            continue
        modules[module["programId"]] = module

    output = Path(args.output)
    existing: list[dict] = []
    if output.exists():
        if args.merge:
            try:
                existing_data = json.loads(output.read_text(encoding="utf-8"))
            except (OSError, json.JSONDecodeError) as exc:
                raise SystemExit(f"cannot read existing dataset {output}: {exc}") from exc
            if not isinstance(existing_data, list):
                raise SystemExit(f"existing dataset is not a JSON array: {output}")
            existing = existing_data
        elif not args.force:
            parser.error(
                f"{output} already exists; use --merge to merge imported titles "
                "or --force to replace it"
            )

    result = merge_modules(existing, modules.values()) if args.merge else sorted(
        modules.values(), key=lambda item: item["programId"]
    )
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        json.dumps(result, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"wrote {len(result)} modules to {output}")
    if skipped:
        print(f"skipped {skipped} document(s) with a missing or invalid title id")


if __name__ == "__main__":
    main()
