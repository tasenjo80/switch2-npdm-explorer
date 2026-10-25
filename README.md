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
- **Insights** — auto-generated cards for built-in gaps, host leverage, widest
  clients, built-in families, and GPU/codec, filesystem, network, and input
  clusters.
- **Compare** — module-vs-module diff of permissions, services, syscalls, maps,
  IRQs, and thread settings.
- **Graph** — focused IPC graph for a module or service, with clickable nodes
  and capped neighborhoods.

Exports: module/service/family CSVs, insights JSON, compare JSON, graph JSON,
and module research-status JSON. Views are shareable through URL hashes.

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

Do not commit NPDM/NCA/NSP/XCI files, keys, saves, or game data. See
[CONTRIBUTING.md](CONTRIBUTING.md).

## Research status

Latest dated community notes (2026-10-26): [docs/status-2026-10-26.md](docs/status-2026-10-26.md).
Earlier notes: [docs/status-2026-10-25.md](docs/status-2026-10-25.md).

- **OunceCake** (GPLv2) is the first public game dumper: unencrypted romFS and
  exeFS for games, updates, and DLC on a jailbroken console.
  <https://github.com/misshexa66/OunceCake>
- It is read-only game-file access, not system NPDM access, and it provides no
  keys or offline NCA4 decryption.
- 23.0.1 was still current; the WebKit port was still private/unreleased.
- Community reports describe a browser/update "supernag" that can disable web
  applets and may affect a future browser-based entry point.
- No new NPDM metadata appeared, so the dataset remains the 2026-10-24 snapshot.

## Development

```powershell
python -m unittest discover -s tests -v
node --check site/app.js
```

CI runs the build, JS syntax check, and tests. GitHub Pages deploys `site/` on
pushes to `main`.

Repository layout:

```text
site/        static app + generated data.js
data/        source metadata JSON + schema
tools/       build + beetool importer
tests/       data, importer, and policy checks
docs/        methodology and parsing notes
exports/     generated CSV exports
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
