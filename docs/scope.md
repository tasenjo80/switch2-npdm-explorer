# Dataset scope

This project is an NPDM metadata explorer, not a general system-title browser,
game dumper, key archive, or exploit guide.

For firmware, entry-point, and community-tool status, see the
[compatibility page](https://tasenjo80.github.io/switch2-npdm-explorer/compatibility.html).
This document only covers dataset scope.

## Included

- **64 installed full `SystemProgram` titles** from the 2026-10-24 community
  dump.
- NPDM metadata for each title: module name, program ID, filesystem permission
  mask, hosted and used services, syscalls, memory maps, IRQs, handle table,
  thread settings, and related fields.
- Derived service, family, insight, compare, and graph data.

The captured program IDs span the `0400000000000006`–`040000000000008D` range.

## Excluded

- **`SystemDataArchive` titles**, including the `0x800` block such as
  `BrowserDll` (`0400000000000803`) and `BrowserCoreDll`
  (`040000000000085D`).
- Applications, games, game updates, and DLC.
- NPDM binaries, NCAs, NSPs, XCIs, NROs, NSOs, keys, tickets, and save data.

System data archives contain data content, not an NPDM program description.
They therefore have no NPDM permission record, service graph, or syscall list
to add to this dataset.

## Title types at a glance

| Title type | Included? | Why |
| --- | ---: | --- |
| Installed full `SystemProgram` | Yes | Has `main.npdm` metadata |
| `SystemDataArchive` (`0x800` block) | No | Data content, no NPDM program record |
| Application or game | No | Outside system-module research scope |
| Game update or DLC | No | Not system NPDM metadata |
| NPDM/NCA/NSP/XCI/NRO/NSO file | Never | Binaries are not accepted |

## Can this be added?

| Submission | Answer |
| --- | --- |
| A previously missing full `SystemProgram` with valid `main.npdm` metadata | **Yes**, with provenance |
| A newer complete `SystemProgram` snapshot | **Yes**, as a dataset update |
| `BrowserCoreDll` or another `SystemDataArchive` | **No** — no NPDM record |
| A game dump or extracted assets | **No** — wrong repository |
| A loose `main.npdm` or partial update without provenance | **Not accepted as-is** |
| Keys, tickets, saves, or console identifiers | **Never** |

## Why `0x85D` is not a capture miss

The firmware dumper enumerates NCM with
`NcmContentMetaType_SystemProgram` and `NcmContentInstallType_Full`, then
opens CodeFS for each returned title and captures `main` and `main.npdm` only.
`BrowserCoreDll` is a system data archive in the `0x800` block, so it is not
part of that inventory. A separate `SystemDataArchive` query could confirm its
content-meta type, but it would not produce an NPDM metadata record.

See issue [#1](https://github.com/tasenjo80/switch2-npdm-explorer/issues/1)
for the specific `BrowserCoreDll` question.

## What counts as provenance

For a metadata contribution, include:

- firmware version
- capture date
- title ID(s)
- whether the title was installed full
- dump method in general terms
- a public reference or issue link when available
- SHA-256 of the metadata JSON, not of a binary

Do **not** include:

- NPDM/NCA/NSP/XCI/NRO/NSO files
- keys, tickets, saves, or game data
- private Discord exports, invite links, or handles
- console identifiers or personal paths

## Contribution workflow

```text
capture metadata -> validate -> merge -> rebuild -> tests -> issue/PR
```

```powershell
python tools/validate_data.py data/npdm-metadata.json
python tools/import_beetool.py --input <json-dir> --output data/npdm-metadata.json --merge
python tools/build.py --data data/npdm-metadata.json --out site --exports exports
python tools/check_generated.py
python -m unittest discover -s tests -v
```

Use the metadata-question issue form for questions or corrections. Describe the
provenance first; do not attach binaries or dumps.

## What would change the dataset

- A newer complete full-`SystemProgram` metadata dump.
- A previously missing full `SystemProgram`.
- A documented correction to an existing module’s metadata.

Not sufficient:

- new game dumps or OunceCake output
- `SystemDataArchive` files
- firmware dumps without NPDM metadata
- unverified Discord/Reddit claims

## Known limits

- One 2026-10-24 snapshot; it is not a live firmware feed.
- Installed full `SystemProgram` titles only.
- No NPDM binaries, so ACLs and some deeper capability details are absent.
- “Likely built-in” is a family-level heuristic, not a confirmed classification.
- The viewer does not provide exploits, keys, game dumps, or piracy support.

## Freshness

- Data snapshot: **2026-10-24**
- Last review: **2026-10-27**
- No newer NPDM metadata was found in the reviewed exports.

If a newer full `SystemProgram` dump appears, update the source JSON, rebuild
`site/data.js` and `exports/`, update tests and `DATA-PROVENANCE.md`, and add a
dated status note.
