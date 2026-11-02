# NPDM Explorer

An offline browser for Switch 2 system-module NPDM metadata and the IPC
service graph. It is a static, dependency-free research tool: no server, no
build required to view it, and no network requests.

> **Status:** early research tool. The dataset is community-shared metadata;
> see [DATA-PROVENANCE.md](DATA-PROVENANCE.md). Removal requests are honored.

> **Start here:** [Open the live viewer](https://tasenjo80.github.io/switch2-npdm-explorer/) ·
> [Compatibility and tooling](https://tasenjo80.github.io/switch2-npdm-explorer/compatibility.html) ·
> [Data dictionary](https://tasenjo80.github.io/switch2-npdm-explorer/dictionary.html) ·
> [Discussions](https://github.com/tasenjo80/switch2-npdm-explorer/discussions)
>
> New here? The compatibility page covers firmware, entry points, and tools;
> the viewer opens the NPDM metadata directly.

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
  and capped neighborhoods, plus a shortest-path finder between any module and
  service.

Exports: filtered module/service/family CSVs, the hostless-services CSV, insights
JSON, compare JSON, graph JSON, and module research-status JSON. Views are
shareable through URL hashes. The [data dictionary](https://tasenjo80.github.io/switch2-npdm-explorer/dictionary.html)
explains every field, the service graph, and the derived surface/focus values.

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

### Diffing snapshots

`tools/diff_npdm.py` compares two schema-valid NPDM metadata files and reports
module, service, and family changes. It validates both inputs, keys modules by
program ID, and compares raw NPDM fields only. See [docs/diff.md](docs/diff.md).

```powershell
python tools/diff_npdm.py `
  --old data/npdm-metadata.json `
  --new path\to\new-npdm-metadata.json
```

## Research status

Latest dated community notes (2026-11-02): [docs/status-2026-11-02.md](docs/status-2026-11-02.md).
Earlier notes: [2026-11-01](docs/status-2026-11-01.md),
[2026-10-30](docs/status-2026-10-30.md),
[2026-10-29](docs/status-2026-10-29.md),
[2026-10-27](docs/status-2026-10-27.md),
[2026-10-26](docs/status-2026-10-26.md),
[2026-10-25](docs/status-2026-10-25.md).
Stable compatibility and tooling page: <https://tasenjo80.github.io/switch2-npdm-explorer/compatibility.html>.

- **23.0.1 remained current at review time**; no 23.0.2 was observed.
  Community analysis puts the WebKit applet gate change at 21.0.0, with
  20.5.0-and-lower consoles able to use the older access method. Staff advised
  lower-firmware users not to update.
- **ns2jb** requires full SmileBASIC 4.4.9, which was delisted from the eShop
  on 2026-10-22; existing owners are the practical audience. The author
  reports FS access, native code as ordinary sysmodules, save backup, game
  modding, and MMIO, but it remains tethered and is not CFW.
- **SmileBASIC 4.4.6 demo support** is reported through the community
  [`ns2jb2`](https://gitlab.com/BermTheSequel/ns2jb2) fork. It needs Ethernet
  on both ends, the game on internal storage, and roughly 20% success; the
  demo cannot save programs, so the bootstrap must be re-entered with
  `SAVEV`/`LOADV` workarounds. Full 4.4.9 remains the reference path.
- [**CivSwitch**](https://github.com/Gezine/CivSwitch) was published on
  2026-11-01 as a public XSS toolchain for the **Switch 1 edition of
  Civilization 7**. It supports only the physical 1.0.0
  cartridge, recommends a Pico 2, and the author reports testing on Switch 2
  20.4.0 and 23.0.1. It is **userland/JavaScript only**: it starts a JS loader
  and can install a save-persistent trigger, but provides no FS, native code,
  kernel, CFW, or console persistence. It does not replace SmileBASIC/`ns2jb`
  or the Seedsow/Artemis FS path; if you already have one of those entry
  points, it adds no FS capability.
- **Seedsow/Artemis entry point** was announced on 2026-10-30. A modified
  Seedsow save can be installed from a homebrewed Switch 1 with JKSV and
  Nintendo's official save transfer, without SmileBASIC. An `ns2jb` session
  plus [`ns2-savekit`](https://github.com/dougchansan/ns2-savekit) is the
  alternative save-writing route. The path is **currently tethered**; the FS
  escalation is **untested** and the bootstrap is **not public**. Same-access
  and future untethered launch are goals, not confirmed capabilities. A remote
  NSO Cloud transfer is user-reported and needs the full game on the target
  plus NSO; the demo has no cloud save. Seedsow Lua Editor v0.1.3 remains the
  reference editor and targets 23.0.1 on both consoles while current.
- [`ns2-savekit`](https://github.com/dougchansan/ns2-savekit) received
  save-enumeration, title-name, and SD/game-card listing updates on 2026-10-31.
  It remains a save tool, not an entry point.
- The **Japanese Seedsow Lullaby demo** was reported delisted on 2026-10-30.
  A Korean takedown was reported on 2026-11-02; it is not independently
  confirmed. Other regions may follow; keep the demo if you already have it.
- The official WebKit port remained **private/unreleased**. The public
  [Jmesmykil research repo](https://github.com/Jmesmykil/switch2-captive-portal-research)
  was replaced on 2026-11-02 with a payload pack containing CSSFontFace
  UAF/ARW/JOP files and a launcher. Its README calls the release a
  reachability/diagnostic payload and says it does not provide code execution;
  the commit message claims a weaponized chain. These claims conflict, have not
  been independently verified, and do not establish FS or 23.0.1 support. The
  old CVE-2026-43715 trigger page was removed.
- A **UFS interposer** project is researching hardware NAND backup/restore.
  It is high-risk and not a jailbreak.
- **OunceCake** remains read-only game-file access. A community HTTP/WebDAV
  fork reports dumping full system firmware titles and system data archives;
  that could produce future NPDM metadata, but no new dataset exists yet. The
  dataset remains the 2026-10-24 snapshot.

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
node --check site/pathfinder.js
node --test tests/test_pathfinder.js
```

CI runs dataset validation, the generated-file check, build, JS syntax checks,
Node path-finder tests, and Python tests. GitHub Pages deploys `site/` on pushes
to `main` or `master`.

Repository layout:

```text
site/        static app, compatibility page, data dictionary, and generated data.js
data/        source metadata JSON + schema
tools/       build, validation, generated-file check, beetool importer, diff
tests/       data, importer, diff, policy, accessibility, docs, path finder
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
