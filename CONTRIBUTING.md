# Contributing

## Data policy

This repository is for **metadata and tooling**, not console dumps.

Do not submit:

- NPDM, NCA, NSP, XCI, NRO, NSO, or save files
- encryption keys, key files, tickets, or console identifiers
- game data or full game dumps
- Discord exports, private messages, invite links, or screenshots of private
  research channels
- credentials, pairing codes, Wi-Fi details, or personal paths

If you have a metadata update, describe its provenance and open an issue or PR
with the JSON only. Data changes must stay within the schema and must be
reviewable.

## Code

- The app is vanilla HTML/CSS/JS; no runtime dependencies.
- Keep the static build working: `python tools/build.py --data data/npdm-metadata.json --out site --exports exports`.
- Run `node --check site/app.js`.
- Run `python -m unittest discover -s tests -v`.
- Keep generated `site/data.js` and `exports/` consistent with the source JSON.
- `site/compatibility.html` is the public compatibility/tooling page. Keep
  claims sourced and labelled; do not add private research data.

## Pull requests

- One focused change per PR.
- Explain data/provenance changes explicitly.
- Do not add screenshots or Discord research exports.
- By contributing code, you agree it is licensed under the MIT license. Docs are
  CC BY 4.0.

## Sensitive reports

Do not open a public issue for a data-removal or security-sensitive request.
See [SECURITY.md](SECURITY.md).
