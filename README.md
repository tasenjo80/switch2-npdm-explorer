# NPDM Explorer

An offline browser for Switch 2 system-module NPDM metadata and the IPC
service graph. It is a static, dependency-free research tool: no server, no
build required to view it, and no network requests.

> **Status:** early research tool. The dataset is community-shared metadata;
> see [DATA-PROVENANCE.md](DATA-PROVENANCE.md). Removal requests are honored.

## Views

- **Modules** — NPDM permissions, syscalls, memory maps, IRQs, handle table,
  thread settings, surface ranking, focus flags, and research status.
- **Services** — IPC services with host/user counts and cross-links in both
  directions.
- **Service families** — aggregated service names (`spl`, `pm`, `gsv`, …),
  unique hosts/users, and built-in candidates.
- **Insights** — auto-generated cards for host leverage, widest clients,
  built-in families, and GPU/codec, filesystem, network, and input clusters,
  plus a filterable hostless/built-in gap table.
- **Compare** — module-vs-module diff of permissions, services, syscalls, maps,
  IRQs, and thread settings.
- **Graph** — focused IPC graph for a module or service, with clickable nodes
  and capped neighborhoods.

Exports: filtered module/service/family CSVs, the hostless-services CSV, insights
JSON, compare JSON, graph JSON, and module research-status JSON. Views are
shareable through URL hashes.

Keyboard: use Left/Right/Home/End on the view tabs; Escape closes detail panels
and returns focus to the selected row. Scrollable tables are focusable for
horizontal keyboard scrolling.

## Run it

Open `site/index.html` in a modern browser. Everything is local.

Rebuild the generated data and exports:

```powershell
python tools/build.py `
  --data data/npdm-metadata.json `
  --out site `
  --exports exports
```

Then open `site/index.html`.

## Data

The included `data/npdm-metadata.json` is a community dump of system-module
NPDM metadata from the r/switch2hacks `#dev-research` forum (2026-10-24). It
contains module names, program IDs, permission masks, service names, syscalls,
maps, and IRQs — **not** NPDM binaries, NCAs, keys, game dumps, or save data.

The dataset is community-shared metadata. This project does not assert a
license over the underlying data, and removal requests are honored. See
[DATA-PROVENANCE.md](DATA-PROVENANCE.md).

The dataset covers **64 installed full `SystemProgram` titles** and NPDM
metadata only. System data archives such as `BrowserDll` (`0x803`) and
`BrowserCoreDll` (`0x85D`) are outside its scope; see
[docs/scope.md](docs/scope.md).

The source shape is documented in [data/schema.json](data/schema.json) and
enforced by `tools/validate_data.py`.

### Regenerating from your own dump

The metadata schema is designed to be compatible with
[`alula/beetool`](https://github.com/alula/beetool), a hactool fork with Switch 2
(“Ounce”) support. A normal beetool invocation is:

```powershell
beetool --intype=npdm --json=main.json main.npdm
```

A merge importer is included at `tools/import_beetool.py`; it maps beetool’s
JSON fields to the schema used here. It accepts beetool JSON files, not NPDM
binaries, so you keep control of the raw dump.

```powershell
python tools/import_beetool.py `
  --input dumps/ `
  --output data/npdm-metadata.json `
  --merge
```

Use `--merge` when adding titles to an existing dataset; it preserves fields
that beetool does not emit. Use `--force` only when you intentionally want to
replace the existing dataset.

Do not commit NPDM/NCA/NSP/XCI files, keys, saves, or game data. See
[CONTRIBUTING.md](CONTRIBUTING.md).

## Research status

Latest dated community notes (2026-10-27): [docs/status-2026-10-27.md](docs/status-2026-10-27.md).
Earlier notes: [2026-10-26](docs/status-2026-10-26.md),
[2026-10-25](docs/status-2026-10-25.md).

- **23.0.1 remained current**; no 23.0.2 was observed. Community analysis puts
  the WebKit applet gate change at 21.0.0, with 20.5.0-and-lower consoles able
  to use the older access method. Staff advised lower-firmware users not to
  update.
- **Artemis Engine** demos are being stockpiled as a possible secondary,
  semi-untethered entry point, but the actual Switch 2 Artemis exploit/tool is
  not public.
- The official WebKit port remained **private/unreleased**. Independent JSC
  crash/read-write research was reported but not released as an exploit.
- A **UFS interposer** project is researching hardware NAND backup/restore.
  It is high-risk and not a jailbreak.
- **OunceCake** remains read-only game-file access, not system NPDM access.
  No new NPDM metadata appeared, so the dataset remains the 2026-10-24 snapshot.

## Community

Use [GitHub Discussions](https://github.com/tasenjo80/switch2-npdm-explorer/discussions)
for general help, research notes, tools, and ideas. Open an issue for viewer
bugs or metadata questions. The pinned
[Start here](https://github.com/tasenjo80/switch2-npdm-explorer/discussions/2)
post covers scope, current status, and posting rules.

## Citation

If you use the explorer or dataset in research, cite it using
[CITATION.cff](CITATION.cff). GitHub’s “Cite this repository” action reads the
same file.

## Development

```powershell
python tools/validate_data.py data/npdm-metadata.json
python tools/check_generated.py
python -m unittest discover -s tests -v
node --check site/app.js
```

CI runs dataset validation, the generated-file check, build, JS syntax check,
and tests. GitHub
Pages deploys `site/` on pushes to `main` or `master`.

Repository layout:

```text
site/        static app + generated data.js
data/        source metadata JSON + schema
tools/       build + validation + generated-file check + beetool importer
tests/       data, importer, policy, and accessibility checks
docs/        methodology and parsing notes
exports/     generated CSV exports
assets/      social preview source + PNG
```

## Credits

This project is built on community research from the r/switch2hacks
`#dev-research` forum. NPDM parsing is designed to interoperate with
`alula/beetool`; hactool is by SciresM. See [CREDITS.md](CREDITS.md). Named
credits can be added with permission.

## License

- Code: MIT — see [LICENSE](LICENSE).
- Documentation: CC BY 4.0 — see [LICENSE-DOCS.md](LICENSE-DOCS.md).
- Data: no license asserted over the underlying dataset; see
  [DATA-PROVENANCE.md](DATA-PROVENANCE.md).

## Disclaimer

Not affiliated with Nintendo. For research and education on hardware you own.
No firmware, keys, game dumps, or piracy tools are included. The surface score
and focus flags are research heuristics, not vulnerability claims.
