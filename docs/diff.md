# Diffing NPDM snapshots

`tools/diff_npdm.py` compares two schema-valid NPDM metadata files and reports
what changed between them. It validates both inputs with the same checks as
`tools/validate_data.py`, keys modules by `programId`, and compares raw NPDM
fields only.

Derived values such as the explorer's surface score, focus flags, tags, and
editorial notes are not diffed. They are per-snapshot or curated, so treating
them as firmware changes would be misleading.

## Usage

```powershell
python tools/diff_npdm.py `
  --old data/npdm-metadata.json `
  --new path\to\new-npdm-metadata.json
```

Markdown is the default and is written to stdout. JSON output and a file target
are available:

```powershell
python tools/diff_npdm.py `
  --old data/npdm-metadata.json `
  --new path\to\new-npdm-metadata.json `
  --format json `
  --out npdm-diff.json
```

Optional `--old-label` and `--new-label` replace the default file names in the
output. The tool does not add a timestamp, so the same inputs produce the same
output.

Use this with a dump from hardware you own. Do not commit NPDM binaries, keys,
game data, or saves.

## What is compared

- **Modules**: added, removed, and renamed entries; version, product code,
  64-bit flag, address space, thread settings, system resource size, FS
  permissions, memory-map count, applet type, handle table, debug metadata,
  and set differences for host, used, and ACID-host services plus syscalls and
  IRQs.
- **Services**: added and removed services; host, user, and ACID-host changes;
  hostless-to-hosted and hosted-to-hostless transitions.
- **Families**: added and removed families, plus service membership changes.

## Output

Markdown contains a summary and, when there are changes, tables and per-entry
details. JSON uses this top-level shape:

```json
{
  "format": "npdm-diff-v1",
  "meta": {
    "oldLabel": "old.json",
    "newLabel": "new.json",
    "oldModuleCount": 64,
    "newModuleCount": 65
  },
  "summary": {},
  "modules": {"added": [], "removed": [], "changed": []},
  "services": {"added": [], "removed": [], "changed": []},
  "families": {"added": [], "removed": [], "changed": []}
}
```

The `summary` object contains module, service, family, syscall, service-host,
service-user, and hostless-transition counts. Added and removed services include
their host, user, and ACID-host references. Exit code is `0` even when changes
are found; invalid input or an I/O error returns `1`.

## Limits

- One snapshot is not a history. You need two files to diff.
- The tool compares the schema fields in `data/schema.json`; fields outside
  that schema are not compared.
- Service ACL changes are set differences. The tool does not interpret
  permission semantics or claim that a change is a vulnerability.
- The output is not a new dataset and is not added to the explorer
  automatically. See [scope.md](scope.md) and
  [DATA-PROVENANCE.md](../DATA-PROVENANCE.md).

## See also

- [Compatibility and tooling](https://tasenjo80.github.io/switch2-npdm-explorer/compatibility.html)
- [Methodology](methodology.md)
- [Latest status note](status-2026-10-27.md)
