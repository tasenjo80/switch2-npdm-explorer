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

Latest dated community notes (2026-11-13): [docs/status-2026-11-13.md](docs/status-2026-11-13.md).
Earlier notes: [2026-11-12](docs/status-2026-11-12.md),
[2026-11-11](docs/status-2026-11-11.md),
[2026-11-10](docs/status-2026-11-10.md),
[2026-11-04](docs/status-2026-11-04.md),
[2026-11-03](docs/status-2026-11-03.md),
[2026-11-02](docs/status-2026-11-02.md),
[2026-11-01](docs/status-2026-11-01.md),
[2026-10-30](docs/status-2026-10-30.md),
[2026-10-29](docs/status-2026-10-29.md),
[2026-10-27](docs/status-2026-10-27.md),
[2026-10-26](docs/status-2026-10-26.md),
[2026-10-25](docs/status-2026-10-25.md).
Stable compatibility and tooling page: <https://tasenjo80.github.io/switch2-npdm-explorer/compatibility.html>.

- **23.5.0 was released on 2026-11-09** and is current. The public
  [SwitchBrew 23.5.0 page](https://switchbrew.org/wiki/23.5.0) lists `FS` among
  the rebuilt KIPs. Community staff report it patched the FS bug used by the
  current public FS/userland paths and advise staying on **23.0.1 or lower**;
  this report is not independently verified here.
  The current FS-based entry points should be treated as broken on 23.5.0 until
  tested. One user reports CivSwitch's JS side still runs on 23.5.0, but the FS
  escalation remains blocked; Balatro's 23.5.0 compatibility is untested. Do not
  update if keeping the current entry points matters. Community analysis puts
  the WebKit applet gate change at 21.0.0, with 20.5.0-and-lower consoles able
  to use the older access method.
- **23.0.1 supernag alert (2026-11-12):** community staff report multiple users
  are forced to update before **SmileBASIC 4** or **Civilization VII** will
  launch, and that Maintenance Mode does not clear it. No Seedsow Lullaby
  reports had appeared. This is a community report, not independently verified
  here. Stay offline and/or keep 90DNS active, disable IPv6 per network, and do
  not test it online.
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
  points, it adds no FS capability. Gezine stated on 2026-11-02 that the fs bug
  works from CivSwitch but needs porting; this is unverified and not a current
  FS path. A Reddit user reports an installed trigger still starts the JS loader
  after updating to 23.5.0; the FS escalation remains blocked. This is a single
  unverified report, not a reason to update. On 23.0.1, community reports a
  forced update before Civ 7 will launch; stay offline.
- **CivSwitch variants:** [`CivSwitchLDN`](https://github.com/ItsNerisma/CivSwitchLDN)
  changes delivery to local wireless and requires Linux, a physical compatible
  cartridge, and the user's own `prod.keys`;
  [`CivSwitch-ControlCenter`](https://github.com/MatthewKuKanich/CivSwitch-ControlCenter)
  is a controller interface over an existing loader. Neither adds FS or a new
  entry point. A third-party Gitee
  [`civswitch-kit`](https://gitee.com/mza1010/civswitch-kit) packages CivSwitch
  with the existing `ns2jb` FS chain for **23.0.1 only** and claims FS read/write
  plus a 90-title firmware dump; it is unreleased, unverified here, and not a
  23.5.0 path.
- [`mac2jb`](https://github.com/cpypwn/mac2jb) **v0.8.2** was published on
  2026-11-12 for Apple Silicon macOS. It adds CivHomebrew app browsing and
  installation for Moonlight, SW2NES, and Jellyfin, and documents a CivSwitch FS
  path that the author reports reaching 4/4 for SaveKit, OunceCake, and
  modloader. It retains the earlier typing/loader setup, modloader installation,
  Control Center, Artemis launcher saves, SaveKit, and MintBrew/HBLauncher. It is
  a helper, not an exploit or CFW; the FS path is experimental and 23.0.1-only,
  and it does not bypass the 23.0.1 supernag.
- **Moonlight and CivHomebrew:** [`Moonlight-CivSwitch`](https://github.com/XITRIX/Moonlight-CivSwitch)
  **v0.1.3** is a public Moonlight/Sunshine streaming client running inside
  CivSwitch through [`CivHomebrew`](https://github.com/XITRIX/CivHomebrew). It
  needs the physical Switch 1 Civilization VII 1.0.0 cartridge, a working
  CivSwitch loader, and Sunshine on a PC. It is a userland `.civapp`, not a
  native app outside Civ 7, native OS, FS, or CFW. The author reports short
  1080p60 streams; sustained 60 FPS is not qualified, and 23.5.0 is untested.
  CivHomebrew installs `.civapp` packages over FTP and does not support `.nro`,
  FS, or native homebrew.
- **CivSwitch FS ports:** [`HerXayah/civ7-fs`](https://github.com/HerXayah/civ7-fs)
  and the Gitee [`civswitch-kit`](https://gitee.com/mza1010/civswitch-kit) are
  public **23.0.1-only** CivSwitch FS ports. `civ7-fs` claims a higher success
  rate but public reports still fail at 2/4; `civswitch-kit` claims FS read/write
  and a firmware dump. Neither is stable or a 23.5.0 path.
  [`OunceCake-Civ7`](https://github.com/BlafKing/OunceCake-Civ7) dumps a user's
  own game content through that FS path; it supplies no keys and no system NPDM
  metadata. **Alula warns against current Artemis-game FS implementations**:
  corrupting the save or game can lose the entry point, and a safer version is
  in progress.
- [`alula/Ozone`](https://github.com/alula/Ozone) and
  [`alula/libnx-ounce`](https://github.com/alula/libnx-ounce) are early,
  source-only groundwork for Switch 2 homebrew: Ozone ports selected Atmosphere
  components, and libnx-ounce is a native-homebrew library fork. Ozone's README
  explicitly says it is **not a full CFW and likely never will be**. Ozone itself
  has no release, installer, persistence, or FS path.
- **Seedsow/Artemis entry point** was announced on 2026-10-30. A modified
  Seedsow save can be installed from a homebrewed Switch 1 with JKSV and
  Nintendo's official save transfer, without SmileBASIC. An `ns2jb` session
  plus [`ns2-savekit`](https://github.com/dougchansan/ns2-savekit) is the
  alternative save-writing route. Alula published
  [`switch-artemis-launcher`](https://github.com/alula/switch-artemis-launcher)
  **v2** on 2026-11-05 for the Nora 2, Seedsow, and Hamidashi Creative demos. It
  fixes saves not being committed to internal storage and raises the HTTP
  request cap; it remains a save-persistent userland Lua/native launcher with an
  HTTP eval/save API. It is **semi-tethered**, supports demos only, and is **not
  an entry point or an FS chain**. The `ns2jb` RPC install route is not yet
  tested. Experimental Artemis FS implementations exist, but Alula warns that
  they can corrupt the save or game and lose the entry point; a safer version is
  in progress. A remote NSO Cloud transfer is user-reported and needs the full
  game on the target plus NSO; the demo has no cloud save. Seedsow Lua Editor
  v0.1.3 remains the reference editor and targets 23.0.1 on both consoles;
  23.5.0 has not been publicly verified.
- [`ns2-savekit`](https://github.com/dougchansan/ns2-savekit) received
  save-enumeration, title-name, and SD/game-card listing updates on 2026-10-31.
  On 2026-11-02 it added an Artemis HTTP transport for save access without an
  `ns2jb` session: unauthenticated port 8080, LAN-only, limited to the
  launcher's own save, and explicit-file backups rather than a complete restore.
  It remains a save tool, not an entry point or FS path.
- [`ns2jb-modloader`](https://github.com/SebaaMG/ns2jb-modloader) is a public
  RomFS/ExeFS mod loader for Switch 1 and Switch 2 games. It needs an existing
  `ns2jb`-compatible FS/RPC session and a microSD or microSD Express card;
  regular microSD is tested, while microSD Express still needs hardware testing.
  It loads RomFS/ExeFS replacements and IPS patches, stays active until reboot,
  and does not support plugins, cheats, or overlays yet. It is a modding tool,
  not an entry point or FS escalation.
- [`balatro-switch-rce`](https://github.com/Luminger/balatro-switch-rce) is a
  public save-based userland proof of concept for the physical Switch 1 Balatro
  cartridge. A crafted save replaces the game with a Lua REPL and an
  unauthenticated FTP server inside the title's process; Nintendo's official
  save transfer carries it to the Switch 2, where it runs in backward
  compatibility without CFW on the target. It does **not** use `ns2jb`'s FS bug,
  but it is not a kernel exploit, sysmodule, console-wide FS path, or standalone
  entry point. It targets exact 1.0.1f/1.0.1o images; the native Switch 2 Balatro
  binary is rejected. RPC/FTP are LAN-only, unauthenticated, and unencrypted;
  compatibility with 23.5.0 is untested.
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
