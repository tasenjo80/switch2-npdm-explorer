#!/usr/bin/env python3
"""Merge beetool NPDM JSON files into the NPDM Explorer schema.

beetool: https://github.com/alula/beetool
Usage:
    beetool --intype=npdm --json=main.json main.npdm
    python tools/import_beetool.py --input dumps/ --output data/npdm-metadata.json

This importer accepts beetool JSON, not NPDM binaries.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any, Iterable


def _hex_id(value: Any) -> str:
    if isinstance(value, str):
        text = value.strip().lower()
        if text.startswith("0x"):
            text = text[2:]
        return text.zfill(16)
    return f"{int(value):016x}"


def _hex_perms(value: Any) -> str:
    if isinstance(value, str):
        text = value.strip().lower()
        if text.startswith("0x"):
            text = text[2:]
        return text.zfill(16)
    return f"{int(value or 0):016x}"


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
    program_id = _hex_id(raw.get("title_id", raw.get("program_id", "")))
    if not program_id.strip("0"):
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
        "systemResourceSize": 0,
        "version": _as_int(raw.get("version")),
        "productCode": str(raw.get("product_code") or ""),
        "fsPermissions": _hex_perms(filesystem.get("permissions", 0)),
        "hostsServices": _string_list(raw.get("service_host")),
        "usesServices": _string_list(raw.get("service_access")),
        "acidHostsServices": [],
        "kernel": kernel,
    }


def load_documents(inputs: Iterable[str]) -> list[dict]:
    documents = []
    for value in inputs:
        path = Path(value)
        if path.is_dir():
            paths = sorted(path.rglob("*.json"))
        else:
            paths = [path]
        for file_path in paths:
            data = json.loads(file_path.read_text(encoding="utf-8"))
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
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        json.dumps(sorted(modules.values(), key=lambda item: item["programId"]), indent=2)
        + "\n",
        encoding="utf-8",
    )
    print(f"wrote {len(modules)} modules to {output}")
    if skipped:
        print(f"skipped {skipped} document(s) without a title id")


if __name__ == "__main__":
    main()
