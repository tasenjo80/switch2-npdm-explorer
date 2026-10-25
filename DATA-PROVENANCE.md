# Data provenance and removal policy

## Source

`data/npdm-metadata.json` is a community NPDM metadata dump shared in the
r/switch2hacks `#dev-research` forum on 2026-10-24. It describes Switch 2
system titles on firmware 23.0.1: module names, program IDs, permission masks,
service names, syscalls, memory-map counts, IRQs, handle-table sizes, and
thread settings.

The file does **not** contain:

- NPDM binaries, NCAs, NSPs, XCIs, NROs, or NSOs
- encryption keys or key files
- game dumps or save data
- console-specific identifiers or personal data

## Permission status

The dataset is included **provisionally** while permission from the data owner
and/or the community maintainers is confirmed. This project does not assert a
license over the underlying data. The MIT license in `LICENSE` covers the
software only.

If permission is not granted, the dataset will be removed from the repository.
The app can still be used with a dataset generated from your own console dump.

## Removal requests

If you are the data owner or a maintainer and want this dataset removed:

1. Open an issue titled **“Data removal request”** in this repository, or
   contact the repository owner through GitHub.
2. The data will be removed from `data/npdm-metadata.json`, `site/data.js`,
   `exports/`, and any release assets.
3. If requested, the dataset will also be removed from repository history.

No justification is required for a removal request.

## Regenerating data

The schema is designed to interoperate with
[`alula/beetool`](https://github.com/alula/beetool), which can emit NPDM
permission JSON for a decrypted `main.npdm`:

```powershell
beetool --intype=npdm --json=main.json main.npdm
```

`tools/import_beetool.py` merges those JSON files into this schema. Use only
dumps from hardware you own, and do not redistribute NPDM binaries or keys.

## Attribution

See [CREDITS.md](CREDITS.md). Named credits can be added with permission.
