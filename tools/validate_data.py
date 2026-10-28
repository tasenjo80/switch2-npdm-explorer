#!/usr/bin/env python3
"""Validate the source NPDM metadata dataset.

The JSON Schema in data/schema.json documents the shape for editors. This
stdlib validator also checks constraints JSON Schema cannot express, such as
duplicate program IDs and the file path matching the title ID.

Usage:
    python tools/validate_data.py data/npdm-metadata.json
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any

HEX16 = re.compile(r"^[0-9a-f]{16}$")
MODULE_KEYS = {
    "file",
    "name",
    "programId",
    "is64Bit",
    "addressSpace",
    "mainThreadPriority",
    "mainThreadCore",
    "mainThreadStackSize",
    "systemResourceSize",
    "version",
    "productCode",
    "fsPermissions",
    "hostsServices",
    "usesServices",
    "acidHostsServices",
    "kernel",
}
KERNEL_KEYS = {"syscalls", "maps", "irqs", "appletType", "handleTable", "debug"}
INT_FIELDS = {
    "addressSpace",
    "mainThreadPriority",
    "mainThreadCore",
    "mainThreadStackSize",
    "systemResourceSize",
    "version",
}
LIST_FIELDS = {"hostsServices", "usesServices", "acidHostsServices"}


def _label(index: int, module: dict) -> str:
    name = module.get("name")
    return f"module {index}" + (f" ({name})" if isinstance(name, str) and name else "")


def validate_modules(data: Any) -> list[str]:
    errors: list[str] = []
    if not isinstance(data, list):
        return ["dataset must be a JSON array"]
    if not data:
        return ["dataset must contain at least one module"]

    seen_ids: dict[str, int] = {}
    for index, module in enumerate(data):
        label = _label(index, module if isinstance(module, dict) else {})
        if not isinstance(module, dict):
            errors.append(f"{label}: must be an object")
            continue

        missing = MODULE_KEYS - set(module)
        extra = set(module) - MODULE_KEYS
        if missing:
            errors.append(f"{label}: missing fields: {', '.join(sorted(missing))}")
        if extra:
            errors.append(f"{label}: unknown fields: {', '.join(sorted(extra))}")

        program_id = module.get("programId")
        if not isinstance(program_id, str) or not HEX16.fullmatch(program_id):
            errors.append(f"{label}: programId must be 16 lowercase hex characters")
        elif program_id == "0" * 16:
            errors.append(f"{label}: programId must not be all zero")
        else:
            if program_id in seen_ids:
                errors.append(
                    f"{label}: duplicate programId {program_id} "
                    f"(first seen at module {seen_ids[program_id]})"
                )
            else:
                seen_ids[program_id] = index

        if not isinstance(module.get("name"), str) or not module["name"].strip():
            errors.append(f"{label}: name must be a non-empty string")
        if not isinstance(module.get("file"), str) or not module["file"]:
            errors.append(f"{label}: file must be a non-empty string")
        elif isinstance(program_id, str) and not module["file"].endswith(
            f"/{program_id}/main.npdm"
        ):
            errors.append(f"{label}: file path must end with /{program_id}/main.npdm")
        if not isinstance(module.get("is64Bit"), bool):
            errors.append(f"{label}: is64Bit must be a boolean")
        if not isinstance(module.get("productCode"), str):
            errors.append(f"{label}: productCode must be a string")

        perms = module.get("fsPermissions")
        if not isinstance(perms, str) or not HEX16.fullmatch(perms):
            errors.append(f"{label}: fsPermissions must be 16 lowercase hex characters")

        for field in INT_FIELDS:
            value = module.get(field)
            if not isinstance(value, int) or isinstance(value, bool) or value < 0:
                errors.append(f"{label}: {field} must be a non-negative integer")

        for field in LIST_FIELDS:
            value = module.get(field)
            if not isinstance(value, list) or not all(
                isinstance(item, str) for item in value
            ):
                errors.append(f"{label}: {field} must be an array of strings")

        kernel = module.get("kernel")
        if not isinstance(kernel, dict):
            errors.append(f"{label}: kernel must be an object")
            continue
        kernel_missing = KERNEL_KEYS - set(kernel)
        kernel_extra = set(kernel) - KERNEL_KEYS
        if kernel_missing:
            errors.append(
                f"{label}: kernel missing fields: {', '.join(sorted(kernel_missing))}"
            )
        if kernel_extra:
            errors.append(
                f"{label}: kernel unknown fields: {', '.join(sorted(kernel_extra))}"
            )
        for field in ("syscalls", "irqs"):
            value = kernel.get(field)
            if not isinstance(value, list) or not all(
                isinstance(item, int) and not isinstance(item, bool) and item >= 0
                for item in value
            ):
                errors.append(f"{label}: kernel.{field} must be an array of non-negative integers")
        maps = kernel.get("maps")
        if not isinstance(maps, int) or isinstance(maps, bool) or maps < 0:
            errors.append(f"{label}: kernel.maps must be a non-negative integer")
        for field in ("appletType", "handleTable"):
            value = kernel.get(field)
            if value is not None and (
                not isinstance(value, int) or isinstance(value, bool) or value < 0
            ):
                errors.append(f"{label}: kernel.{field} must be a non-negative integer or null")
        if kernel.get("debug") is not None and not isinstance(kernel.get("debug"), dict):
            errors.append(f"{label}: kernel.debug must be an object or null")

    return errors


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "path",
        nargs="?",
        default="data/npdm-metadata.json",
        help="dataset JSON path",
    )
    args = parser.parse_args(argv)

    path = Path(args.path)
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        print(f"{path}: {exc}", file=sys.stderr)
        return 1

    errors = validate_modules(data)
    if errors:
        for error in errors:
            print(f"{path}: {error}", file=sys.stderr)
        return 1
    print(f"validated {len(data)} modules in {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
