#!/usr/bin/env python3
"""Diff two schema-valid NPDM metadata snapshots.

The tool compares raw NPDM fields only. Derived values such as the explorer's
surface score, focus flags, tags, and editorial notes are intentionally not
diffed because they are per-snapshot or curated.

Usage:
    python tools/diff_npdm.py --old data/npdm-metadata.json --new new.json
    python tools/diff_npdm.py --old old.json --new new.json --format json --out diff.json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Iterable

try:
    from tools.validate_data import validate_modules
except ImportError:  # allow `python tools/diff_npdm.py`
    from validate_data import validate_modules


MODULE_SCALAR_FIELDS = (
    ("name", "Name"),
    ("version", "Version"),
    ("productCode", "Product code"),
    ("is64Bit", "64-bit"),
    ("addressSpace", "Address space"),
    ("mainThreadPriority", "Main thread priority"),
    ("mainThreadCore", "Main thread core"),
    ("mainThreadStackSize", "Main thread stack size"),
    ("systemResourceSize", "System resource size"),
    ("fsPermissions", "FS permissions"),
)
MODULE_SET_FIELDS = (
    ("hostsServices", "Host services"),
    ("usesServices", "Used services"),
    ("acidHostsServices", "ACID host services"),
)
KERNEL_SCALAR_FIELDS = (
    ("maps", "Memory maps"),
    ("appletType", "Applet type"),
    ("handleTable", "Handle table"),
)
KERNEL_SET_FIELDS = (
    ("syscalls", "Syscalls"),
    ("irqs", "IRQs"),
)
SERVICE_SET_FIELDS = (
    ("hosts", "Hosts"),
    ("users", "Users"),
    ("acidHosts", "ACID hosts"),
)


def _canonical(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def _module_summary(module: dict) -> dict:
    kernel = module["kernel"]
    return {
        "name": module["name"],
        "programId": module["programId"],
        "version": module["version"],
        "productCode": module["productCode"],
        "hostCount": len(module["hostsServices"]),
        "useCount": len(module["usesServices"]),
        "acidHostCount": len(module["acidHostsServices"]),
        "syscallCount": len(kernel["syscalls"]),
        "mapCount": kernel["maps"],
        "irqCount": len(kernel["irqs"]),
    }


def _sorted_ids(ids: Iterable[str], by_id: dict[str, dict]) -> list[str]:
    return sorted(ids, key=lambda program_id: (by_id[program_id]["name"].lower(), program_id))


def _service_table(modules: list[dict]) -> dict[str, dict[str, set[str]]]:
    table: dict[str, dict[str, set[str]]] = {}
    for module in modules:
        program_id = module["programId"]
        for field, key in (
            ("hostsServices", "hosts"),
            ("usesServices", "users"),
            ("acidHostsServices", "acidHosts"),
        ):
            for service in module[field]:
                entry = table.setdefault(
                    service,
                    {"hosts": set(), "users": set(), "acidHosts": set()},
                )
                entry[key].add(program_id)
    return table


def _family_table(services: dict[str, dict]) -> dict[str, set[str]]:
    table: dict[str, set[str]] = {}
    for service in services:
        family = service.split(":", 1)[0] if ":" in service else service
        table.setdefault(family, set()).add(service)
    return table


def _name_map(*datasets: list[dict]) -> dict[str, str]:
    names: dict[str, str] = {}
    for modules in datasets:
        for module in modules:
            names[module["programId"]] = module["name"]
    return names


def _refs(program_ids: set[str], names: dict[str, str]) -> list[dict]:
    return [
        {"programId": program_id, "name": names.get(program_id, program_id)}
        for program_id in sorted(
            program_ids,
            key=lambda program_id: (
                names.get(program_id, program_id).lower(),
                program_id,
            ),
        )
    ]


def _service_summary(name: str, entry: dict, names: dict[str, str]) -> dict:
    return {
        "name": name,
        "hosts": _refs(entry["hosts"], names),
        "users": _refs(entry["users"], names),
        "acidHosts": _refs(entry["acidHosts"], names),
        "hostCount": len(entry["hosts"]),
        "useCount": len(entry["users"]),
        "acidHostCount": len(entry["acidHosts"]),
    }


def diff_module(old: dict, new: dict) -> list[dict]:
    changes: list[dict] = []
    for field, label in MODULE_SCALAR_FIELDS:
        if old[field] != new[field]:
            changes.append(
                {
                    "field": field,
                    "label": label,
                    "kind": "scalar",
                    "old": old[field],
                    "new": new[field],
                }
            )

    for field, label in MODULE_SET_FIELDS:
        added = sorted(set(new[field]) - set(old[field]))
        removed = sorted(set(old[field]) - set(new[field]))
        if added or removed:
            changes.append(
                {
                    "field": field,
                    "label": label,
                    "kind": "set",
                    "added": added,
                    "removed": removed,
                }
            )

    old_kernel = old["kernel"]
    new_kernel = new["kernel"]
    for field, label in KERNEL_SCALAR_FIELDS:
        if old_kernel[field] != new_kernel[field]:
            changes.append(
                {
                    "field": f"kernel.{field}",
                    "label": label,
                    "kind": "scalar",
                    "old": old_kernel[field],
                    "new": new_kernel[field],
                }
            )

    for field, label in KERNEL_SET_FIELDS:
        added = sorted(set(new_kernel[field]) - set(old_kernel[field]))
        removed = sorted(set(old_kernel[field]) - set(new_kernel[field]))
        if added or removed:
            changes.append(
                {
                    "field": f"kernel.{field}",
                    "label": label,
                    "kind": "set",
                    "added": added,
                    "removed": removed,
                }
            )

    old_debug = old_kernel.get("debug")
    new_debug = new_kernel.get("debug")
    if _canonical(old_debug) != _canonical(new_debug):
        changes.append(
            {
                "field": "kernel.debug",
                "label": "Debug metadata",
                "kind": "json",
                "old": old_debug,
                "new": new_debug,
            }
        )

    return changes


def diff_services(
    old_table: dict[str, dict[str, set[str]]],
    new_table: dict[str, dict[str, set[str]]],
    names: dict[str, str],
) -> tuple[dict, int]:
    added = [
        _service_summary(name, new_table[name], names)
        for name in sorted(new_table.keys() - old_table.keys())
    ]
    removed = [
        _service_summary(name, old_table[name], names)
        for name in sorted(old_table.keys() - new_table.keys())
    ]

    changed: list[dict] = []
    hostless_transitions = 0
    for name in sorted(old_table.keys() & new_table.keys()):
        old = old_table[name]
        new = new_table[name]
        changes: list[dict] = []
        for field, label in SERVICE_SET_FIELDS:
            added_ids = new[field] - old[field]
            removed_ids = old[field] - new[field]
            if added_ids or removed_ids:
                changes.append(
                    {
                        "field": field,
                        "label": label,
                        "kind": "set",
                        "added": _refs(added_ids, names),
                        "removed": _refs(removed_ids, names),
                    }
                )

        old_hostless = not old["hosts"]
        new_hostless = not new["hosts"]
        if old_hostless != new_hostless:
            hostless_transitions += 1
        if changes or old_hostless != new_hostless:
            changed.append(
                {
                    "name": name,
                    "changes": changes,
                    "hostless": {"old": old_hostless, "new": new_hostless},
                }
            )

    return {"added": added, "removed": removed, "changed": changed}, hostless_transitions


def diff_families(
    old_table: dict[str, set[str]],
    new_table: dict[str, set[str]],
) -> dict:
    added = [
        {"name": name, "services": sorted(new_table[name])}
        for name in sorted(new_table.keys() - old_table.keys())
    ]
    removed = [
        {"name": name, "services": sorted(old_table[name])}
        for name in sorted(old_table.keys() - new_table.keys())
    ]

    changed: list[dict] = []
    for name in sorted(old_table.keys() & new_table.keys()):
        added_services = sorted(new_table[name] - old_table[name])
        removed_services = sorted(old_table[name] - new_table[name])
        if added_services or removed_services:
            changed.append(
                {
                    "name": name,
                    "added": added_services,
                    "removed": removed_services,
                }
            )

    return {"added": added, "removed": removed, "changed": changed}


def diff_datasets(
    old_modules: list[dict],
    new_modules: list[dict],
    old_label: str,
    new_label: str,
) -> dict:
    old_by_id = {module["programId"]: module for module in old_modules}
    new_by_id = {module["programId"]: module for module in new_modules}

    added_ids = new_by_id.keys() - old_by_id.keys()
    removed_ids = old_by_id.keys() - new_by_id.keys()
    common_ids = old_by_id.keys() & new_by_id.keys()

    changed_modules: list[dict] = []
    for program_id in _sorted_ids(common_ids, new_by_id):
        changes = diff_module(old_by_id[program_id], new_by_id[program_id])
        if not changes:
            continue
        entry = {
            "programId": program_id,
            "name": new_by_id[program_id]["name"],
            "changes": changes,
            "changeCount": len(changes),
        }
        old_name = old_by_id[program_id]["name"]
        if old_name != new_by_id[program_id]["name"]:
            entry["oldName"] = old_name
        changed_modules.append(entry)

    modules = {
        "added": [
            _module_summary(new_by_id[program_id])
            for program_id in _sorted_ids(added_ids, new_by_id)
        ],
        "removed": [
            _module_summary(old_by_id[program_id])
            for program_id in _sorted_ids(removed_ids, old_by_id)
        ],
        "changed": changed_modules,
    }

    names = _name_map(old_modules, new_modules)
    old_services = _service_table(old_modules)
    new_services = _service_table(new_modules)
    services, hostless_transitions = diff_services(old_services, new_services, names)
    families = diff_families(
        _family_table(old_services),
        _family_table(new_services),
    )

    syscalls_added = 0
    syscalls_removed = 0
    for entry in changed_modules:
        for change in entry["changes"]:
            if change["field"] == "kernel.syscalls":
                syscalls_added += len(change["added"])
                syscalls_removed += len(change["removed"])

    service_hosts_added = 0
    service_hosts_removed = 0
    service_users_added = 0
    service_users_removed = 0
    for entry in services["changed"]:
        for change in entry["changes"]:
            if change["field"] == "hosts":
                service_hosts_added += len(change["added"])
                service_hosts_removed += len(change["removed"])
            elif change["field"] == "users":
                service_users_added += len(change["added"])
                service_users_removed += len(change["removed"])

    summary = {
        "oldModuleCount": len(old_modules),
        "newModuleCount": len(new_modules),
        "modulesAdded": len(modules["added"]),
        "modulesRemoved": len(modules["removed"]),
        "modulesChanged": len(modules["changed"]),
        "modulesUnchanged": len(common_ids) - len(modules["changed"]),
        "servicesAdded": len(services["added"]),
        "servicesRemoved": len(services["removed"]),
        "servicesChanged": len(services["changed"]),
        "familiesAdded": len(families["added"]),
        "familiesRemoved": len(families["removed"]),
        "familiesChanged": len(families["changed"]),
        "syscallsAdded": syscalls_added,
        "syscallsRemoved": syscalls_removed,
        "serviceHostsAdded": service_hosts_added,
        "serviceHostsRemoved": service_hosts_removed,
        "serviceUsersAdded": service_users_added,
        "serviceUsersRemoved": service_users_removed,
        "hostlessTransitions": hostless_transitions,
    }

    return {
        "format": "npdm-diff-v1",
        "meta": {
            "oldLabel": old_label,
            "newLabel": new_label,
            "oldModuleCount": len(old_modules),
            "newModuleCount": len(new_modules),
        },
        "summary": summary,
        "modules": modules,
        "services": services,
        "families": families,
    }


def _md_escape(value: Any) -> str:
    return str(value).replace("|", "\\|").replace("\n", " ")


def _format_value(field: str, value: Any) -> str:
    if value is None:
        return "\u2014"
    if field == "is64Bit":
        return "yes" if value else "no"
    if field == "version":
        return f"{value} (0x{int(value):08X})"
    if field == "fsPermissions":
        return f"`0x{value}`"
    if isinstance(value, bool):
        return "yes" if value else "no"
    if isinstance(value, int):
        return f"{value:,}"
    if isinstance(value, (dict, list)):
        return f"`{_canonical(value)}`"
    return f"`{value}`"


def _format_items(items: list) -> str:
    if not items:
        return "none"
    parts = []
    for item in items:
        if isinstance(item, dict):
            parts.append(f"{_md_escape(item['name'])} (`{item['programId']}`)")
        else:
            parts.append(str(item))
    return ", ".join(parts)


def _format_set_change(change: dict) -> str:
    parts = []
    if change["added"]:
        parts.append(f"added {_format_items(change['added'])}")
    if change["removed"]:
        parts.append(f"removed {_format_items(change['removed'])}")
    return "; ".join(parts) if parts else "no change"


def _format_change(change: dict) -> str:
    if change["kind"] == "set":
        return f"**{change['label']}:** {_format_set_change(change)}"
    return (
        f"**{change['label']}:** "
        f"{_format_value(change['field'], change['old'])} -> "
        f"{_format_value(change['field'], change['new'])}"
    )


def _module_table(modules: list[dict]) -> str:
    lines = [
        "| Module | Program ID | Version | Hosts | Uses | Syscalls | Maps | IRQs |",
        "| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |",
    ]
    for module in modules:
        lines.append(
            f"| {_md_escape(module['name'])} | `{module['programId']}` | "
            f"{_format_value('version', module['version'])} | "
            f"{module['hostCount']} | {module['useCount']} | "
            f"{module['syscallCount']} | {module['mapCount']} | {module['irqCount']} |"
        )
    return "\n".join(lines)


def _service_table_md(services: list[dict]) -> str:
    lines = [
        "| Service | Hosts | Users | ACID hosts |",
        "| --- | ---: | ---: | ---: |",
    ]
    for service in services:
        lines.append(
            f"| {_md_escape(service['name'])} | {service['hostCount']} | "
            f"{service['useCount']} | {service['acidHostCount']} |"
        )
    return "\n".join(lines)


def _has_changes(diff: dict) -> bool:
    return any(
        diff[section][kind]
        for section in ("modules", "services", "families")
        for kind in ("added", "removed", "changed")
    )


def render_markdown(diff: dict) -> str:
    meta = diff["meta"]
    summary = diff["summary"]
    lines = [
        f"# NPDM diff: {meta['oldLabel']} -> {meta['newLabel']}",
        "",
        f"- Old: `{meta['oldLabel']}` ({summary['oldModuleCount']} modules)",
        f"- New: `{meta['newLabel']}` ({summary['newModuleCount']} modules)",
        "",
        "## Summary",
        "",
        f"- **Modules:** {summary['modulesAdded']} added, "
        f"{summary['modulesRemoved']} removed, "
        f"{summary['modulesChanged']} changed, "
        f"{summary['modulesUnchanged']} unchanged",
        f"- **Services:** {summary['servicesAdded']} added, "
        f"{summary['servicesRemoved']} removed, "
        f"{summary['servicesChanged']} changed",
        f"- **Families:** {summary['familiesAdded']} added, "
        f"{summary['familiesRemoved']} removed, "
        f"{summary['familiesChanged']} changed",
        f"- **Syscalls:** {summary['syscallsAdded']} added, "
        f"{summary['syscallsRemoved']} removed",
        f"- **Service hosts:** {summary['serviceHostsAdded']} added, "
        f"{summary['serviceHostsRemoved']} removed",
        f"- **Service users:** {summary['serviceUsersAdded']} added, "
        f"{summary['serviceUsersRemoved']} removed",
        f"- **Hostless transitions:** {summary['hostlessTransitions']}",
        "",
    ]

    if not _has_changes(diff):
        lines.append("No differences.")
        return "\n".join(lines).rstrip() + "\n"

    if diff["modules"]["added"]:
        lines.extend(
            [
                "## Modules added",
                "",
                _module_table(diff["modules"]["added"]),
                "",
            ]
        )
    if diff["modules"]["removed"]:
        lines.extend(
            [
                "## Modules removed",
                "",
                _module_table(diff["modules"]["removed"]),
                "",
            ]
        )
    if diff["modules"]["changed"]:
        lines.extend(
            [
                "## Modules changed",
                "",
                "| Module | Program ID | Changed fields |",
                "| --- | --- | --- |",
            ]
        )
        for entry in diff["modules"]["changed"]:
            fields = ", ".join(change["label"] for change in entry["changes"])
            lines.append(
                f"| {_md_escape(entry['name'])} | `{entry['programId']}` | "
                f"{_md_escape(fields)} |"
            )
        lines.append("")
        for entry in diff["modules"]["changed"]:
            title = entry["name"]
            if "oldName" in entry:
                title = f"{entry['oldName']} -> {entry['name']}"
            lines.extend([f"### {_md_escape(title)} (`{entry['programId']}`)", ""])
            for change in entry["changes"]:
                lines.append(f"- {_format_change(change)}")
            lines.append("")

    if diff["services"]["added"]:
        lines.extend(
            [
                "## Services added",
                "",
                _service_table_md(diff["services"]["added"]),
                "",
            ]
        )
    if diff["services"]["removed"]:
        lines.extend(
            [
                "## Services removed",
                "",
                _service_table_md(diff["services"]["removed"]),
                "",
            ]
        )
    if diff["services"]["changed"]:
        lines.extend(
            [
                "## Services changed",
                "",
                "| Service | Changed fields | Hostless |",
                "| --- | --- | --- |",
            ]
        )
        for entry in diff["services"]["changed"]:
            fields = ", ".join(change["label"] for change in entry["changes"])
            hostless = entry["hostless"]
            transition = f"{'yes' if hostless['old'] else 'no'} -> "
            transition += f"{'yes' if hostless['new'] else 'no'}"
            lines.append(
                f"| {_md_escape(entry['name'])} | {_md_escape(fields)} | {transition} |"
            )
        lines.append("")
        for entry in diff["services"]["changed"]:
            lines.extend([f"### {_md_escape(entry['name'])}", ""])
            for change in entry["changes"]:
                lines.append(f"- {_format_change(change)}")
            hostless = entry["hostless"]
            if hostless["old"] != hostless["new"]:
                lines.append(
                    f"- **Hostless:** {'yes' if hostless['old'] else 'no'} -> "
                    f"{'yes' if hostless['new'] else 'no'}"
                )
            lines.append("")

    if diff["families"]["added"]:
        lines.extend(
            [
                "## Families added",
                "",
                "| Family | Services |",
                "| --- | --- |",
            ]
        )
        for entry in diff["families"]["added"]:
            lines.append(
                f"| {_md_escape(entry['name'])} | {_format_items(entry['services'])} |"
            )
        lines.append("")
    if diff["families"]["removed"]:
        lines.extend(
            [
                "## Families removed",
                "",
                "| Family | Services |",
                "| --- | --- |",
            ]
        )
        for entry in diff["families"]["removed"]:
            lines.append(
                f"| {_md_escape(entry['name'])} | {_format_items(entry['services'])} |"
            )
        lines.append("")
    if diff["families"]["changed"]:
        lines.extend(
            [
                "## Families changed",
                "",
                "| Family | Services added | Services removed |",
                "| --- | --- | --- |",
            ]
        )
        for entry in diff["families"]["changed"]:
            lines.append(
                f"| {_md_escape(entry['name'])} | "
                f"{_format_items(entry['added'])} | "
                f"{_format_items(entry['removed'])} |"
            )
        lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def render_json(diff: dict) -> str:
    return json.dumps(diff, ensure_ascii=False, indent=2) + "\n"


def load_dataset(path: str | Path) -> list[dict]:
    path = Path(path)
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        raise ValueError(f"{path}: invalid JSON: {exc}") from exc

    errors = validate_modules(data)
    if errors:
        raise ValueError(
            f"{path}: invalid NPDM metadata:\n"
            + "\n".join(f"  {error}" for error in errors)
        )
    return data


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Diff two schema-valid NPDM metadata snapshots."
    )
    parser.add_argument("--old", required=True, help="baseline dataset JSON")
    parser.add_argument("--new", required=True, help="newer dataset JSON")
    parser.add_argument(
        "--format",
        choices=("md", "json"),
        default="md",
        help="output format (default: md)",
    )
    parser.add_argument("--out", help="write output to this file instead of stdout")
    parser.add_argument("--old-label", help="label for the baseline snapshot")
    parser.add_argument("--new-label", help="label for the newer snapshot")
    args = parser.parse_args(argv)

    try:
        old_modules = load_dataset(args.old)
        new_modules = load_dataset(args.new)
    except (OSError, ValueError) as exc:
        print(str(exc), file=sys.stderr)
        return 1

    diff = diff_datasets(
        old_modules,
        new_modules,
        args.old_label or Path(args.old).name,
        args.new_label or Path(args.new).name,
    )
    text = render_markdown(diff) if args.format == "md" else render_json(diff)

    if args.out:
        try:
            with Path(args.out).open("w", encoding="utf-8", newline="\n") as handle:
                handle.write(text)
        except OSError as exc:
            print(str(exc), file=sys.stderr)
            return 1
    else:
        sys.stdout.write(text)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
