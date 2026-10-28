# Dataset scope

This project is an NPDM metadata explorer, not a general system-title browser.

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

## Why `0x85D` is not a capture miss

The firmware dumper enumerates NCM with
`NcmContentMetaType_SystemProgram` and `NcmContentInstallType_Full`, then
opens CodeFS for each returned title and captures `main` and `main.npdm` only.
`BrowserCoreDll` is a system data archive in the `0x800` block, so it is not
part of that inventory. A separate `SystemDataArchive` query could confirm its
content-meta type, but it would not produce an NPDM metadata record.

See issue [#1](https://github.com/tasenjo80/switch2-npdm-explorer/issues/1)
for the specific `BrowserCoreDll` question.

## Freshness

- Data snapshot: **2026-10-24**
- Last review: **2026-10-27**
- No newer NPDM metadata was found in the reviewed exports.

If a newer full `SystemProgram` dump appears, update the source JSON, rebuild
`site/data.js` and `exports/`, update tests and `DATA-PROVENANCE.md`, and add a
dated status note.
