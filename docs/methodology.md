# Methodology

## Surface score

The score is a research-attention heuristic, not a vulnerability score:

```text
raw = 3 × host services
    + 1 × used services
    + 0.5 × syscalls
    + 0.5 × memory maps
    + 0.5 × min(IRQs, 10)
    + 5 if FS permissions are nonzero
    + 5 if debug metadata is present

surface = raw / max(raw across the dataset) × 100
```

The weights are intentionally simple and transparent. Change them in
`tools/build.py` if you want a different ranking.

## Focus flags

Focus modules are curated research priorities based on the discussion in the
source community: GPU/codec providers, filesystem/loader paths, storage,
security, input, network, and modules with broad service reach.

Focus flags are not claims that a module is vulnerable.

## Service graph

A service entry aggregates every module that lists the name in
`hostsServices` (provider) and `usesServices` (client). The exact strings are
preserved, so `ldr:ro` and `ldr:cmpt` remain distinct.

A service with no host in this dataset is flagged `no host`. This is usually a
built-in sysmodule/KIP (`fs`, `ldr`, `sm`, `pm`, `spl`) or a provider missing
from the system-title dump. It is a lead, not a confirmed classification.

## Families

Families group exact service names by the prefix before the first colon, or the
whole name when there is no colon:

- `spl:`, `spl:mig`, `spl:ssl` → family `spl`
- `nvdrv:s`, `nvdrv:v` → family `nvdrv`
- `fsp-srv` → family `fsp-srv`

Family host/user counts are **unique modules**, not sums across services.

## Insights

- **Built-in gaps** — hostless services sorted by client count.
- **Host leverage** — for each module, the unique clients reached by all
  services it hosts.
- **Widest clients** — modules sorted by number of used services.
- **Built-in families** — families where every service is hostless and the
  family is in the known built-in set.
- **Clusters** — providers and services touching the GPU/codec, filesystem,
  network, or input stacks.

All insights are derived from the same metadata and inherit its limitations.

## Compare and graph

- **Compare** diffs two modules using the raw NPDM fields and set differences
  for services and syscalls.
- **Graph** shows direct neighbors only. It caps displayed nodes (12 left, 16
  right) and reports the remainder with `+N more`; the detail views show full
  lists.

## Limits

- Scope is installed full `SystemProgram` titles only; `SystemDataArchive`
  titles such as `BrowserCoreDll` (`0x85D`) are excluded. See
  [scope.md](scope.md).
- The dataset has no NPDM binaries, so service ACLs, kernel capability flags,
  and memory-map descriptors are not included yet.
- The data is a single community dump; verify fields before relying on them.
- There is no kernel exploit, and this project does not provide one.
