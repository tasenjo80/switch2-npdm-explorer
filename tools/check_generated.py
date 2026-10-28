#!/usr/bin/env python3
"""Verify that committed generated files match a fresh build.

The check ignores line-ending style and the volatile generatedAt timestamp.
Usage:
    python tools/check_generated.py
"""

from __future__ import annotations

import difflib
import re
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TIMESTAMP = re.compile(r'^\s*"generatedAt":.*\n', re.MULTILINE)

PAIRS = [
    (ROOT / "site" / "data.js", "site", "data.js"),
    (ROOT / "exports" / "npdm-modules.csv", "exports", "npdm-modules.csv"),
    (ROOT / "exports" / "npdm-services.csv", "exports", "npdm-services.csv"),
    (
        ROOT / "exports" / "npdm-service-families.csv",
        "exports",
        "npdm-service-families.csv",
    ),
]


def normalized_text(text: str) -> str:
    text = text.lstrip("\ufeff").replace("\r\n", "\n").replace("\r", "\n")
    return TIMESTAMP.sub("", text)


def committed_text(path: Path) -> str:
    """Use HEAD content so the check still catches stale files after a build."""
    relative = path.relative_to(ROOT).as_posix()
    result = subprocess.run(
        ["git", "show", f"HEAD:{relative}"],
        cwd=ROOT,
        capture_output=True,
    )
    if result.returncode == 0:
        return result.stdout.decode("utf-8-sig", errors="replace")
    return path.read_text(encoding="utf-8-sig")


def main() -> int:
    failures = 0
    with tempfile.TemporaryDirectory(prefix="npdm-generated-") as temp:
        root = Path(temp)
        subprocess.run(
            [
                sys.executable,
                str(ROOT / "tools" / "build.py"),
                "--data",
                str(ROOT / "data" / "npdm-metadata.json"),
                "--out",
                str(root / "site"),
                "--exports",
                str(root / "exports"),
            ],
            check=True,
            cwd=ROOT,
        )

        for committed, subdir, name in PAIRS:
            actual = root / subdir / name
            if not actual.exists():
                print(f"missing generated file: {actual}", file=sys.stderr)
                failures += 1
                continue
            expected_text = normalized_text(committed_text(committed))
            actual_text = normalized_text(actual.read_text(encoding="utf-8-sig"))
            if expected_text == actual_text:
                continue
            failures += 1
            print(f"generated file is stale: {committed.relative_to(ROOT)}", file=sys.stderr)
            diff = difflib.unified_diff(
                expected_text.splitlines(),
                actual_text.splitlines(),
                fromfile=str(committed.relative_to(ROOT)),
                tofile=f"fresh build: {name}",
                lineterm="",
                n=2,
            )
            for line in list(diff)[:80]:
                print(line, file=sys.stderr)

    if failures:
        print(
            f"{failures} generated file(s) differ; rebuild and commit them.",
            file=sys.stderr,
        )
        return 1
    print("generated files match a fresh build")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
