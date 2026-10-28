# Regenerating metadata with beetool

[`alula/beetool`](https://github.com/alula/beetool) is a hactool fork with
Switch 2 (“Ounce”) support. It can turn a decrypted `main.npdm` into a JSON
permission description.

## Build beetool

```bash
git clone https://github.com/alula/beetool
cd beetool
cp config.mk.template config.mk
make
```

On Windows, use MinGW as recommended by beetool. The repository is
ISC-licensed; hactool is by SciresM.

## Emit NPDM JSON

```bash
beetool --intype=npdm --json=main.json main.npdm
```

A plaintext `main.npdm` does not need console keys. If you are starting from an
NCA, decrypt it first with a tool and key set you are entitled to use. Never
commit keys or NPDM binaries to this repository.

## Merge JSON files

```bash
python tools/import_beetool.py \
  --input /path/to/beetool-json \
  --output data/npdm-metadata.json \
  --merge
```

`--input` accepts JSON files or directories. `--merge` preserves titles and
fields that beetool does not emit; `--force` replaces the output instead. The
importer maps:

| Schema field | beetool JSON |
| --- | --- |
| `programId` | `title_id` |
| `is64Bit` | `is_64_bit` |
| `addressSpace` | `address_space_type` |
| `mainThreadPriority` | `main_thread_priority` |
| `mainThreadCore` | `default_cpu_id` |
| `mainThreadStackSize` | `main_thread_stack_size` |
| `version` | `version` |
| `fsPermissions` | `filesystem_access.permissions` |
| `hostsServices` | `service_host` |
| `usesServices` | `service_access` |
| `kernel.syscalls` | `syscalls` capability values |
| `kernel.maps` | count of `map` / `map_page` capabilities |
| `kernel.irqs` | non-null `irq_pair` values |
| `kernel.handleTable` | `handle_table_size` |
| `kernel.appletType` | `application_type` |
| `kernel.debug` | `debug_flags` |

Rebuild the site and exports:

```bash
python tools/build.py --data data/npdm-metadata.json --out site --exports exports
```

To compare two metadata snapshots, use `tools/diff_npdm.py`; see
[diff.md](diff.md).

## Rules

- Use dumps from hardware you own.
- Do not redistribute NPDM binaries, NCAs, keys, or game data.
- Metadata updates need provenance and review.
