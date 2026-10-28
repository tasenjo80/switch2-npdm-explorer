import contextlib
import importlib.util
import io
import json
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOOLS = ROOT / "tools"
if str(TOOLS) not in sys.path:
    sys.path.append(str(TOOLS))

MODULE_PATH = TOOLS / "diff_npdm.py"

spec = importlib.util.spec_from_file_location("diff_npdm", MODULE_PATH)
diff_npdm = importlib.util.module_from_spec(spec)
spec.loader.exec_module(diff_npdm)


def make_module(program_id, name):
    return {
        "file": f"dumps/{program_id}/main.npdm",
        "name": name,
        "programId": program_id,
        "is64Bit": True,
        "addressSpace": 3,
        "mainThreadPriority": 44,
        "mainThreadCore": 0,
        "mainThreadStackSize": 4096,
        "systemResourceSize": 0,
        "version": 1,
        "productCode": "AAAA",
        "fsPermissions": "0" * 16,
        "hostsServices": [],
        "usesServices": [],
        "acidHostsServices": [],
        "kernel": {
            "syscalls": [],
            "maps": 1,
            "irqs": [],
            "appletType": None,
            "handleTable": None,
            "debug": None,
        },
    }


class NpdmDiffTests(unittest.TestCase):
    def test_identical_snapshots_have_no_changes(self):
        modules = [make_module("0400000000000001", "alpha")]
        diff = diff_npdm.diff_datasets(modules, modules, "old", "new")

        self.assertEqual(diff["summary"]["modulesAdded"], 0)
        self.assertEqual(diff["summary"]["modulesRemoved"], 0)
        self.assertEqual(diff["summary"]["modulesChanged"], 0)
        self.assertEqual(diff["summary"]["modulesUnchanged"], 1)
        self.assertEqual(diff["modules"]["changed"], [])
        self.assertIn("No differences.", diff_npdm.render_markdown(diff))

    def test_module_add_remove_and_change(self):
        old_a = make_module("0400000000000001", "alpha")
        old_a["version"] = 1
        old_a["fsPermissions"] = "0000000000000001"
        old_a["hostsServices"] = ["old:svc"]
        old_a["usesServices"] = ["use:svc"]
        old_a["kernel"]["syscalls"] = [1, 2]
        old_a["kernel"]["irqs"] = [10]
        old_a["kernel"]["maps"] = 1

        old_b = make_module("0400000000000002", "beta")

        new_a = make_module("0400000000000001", "alpha-renamed")
        new_a["version"] = 2
        new_a["fsPermissions"] = "0000000000000002"
        new_a["hostsServices"] = ["new:svc"]
        new_a["usesServices"] = ["use:svc"]
        new_a["kernel"]["syscalls"] = [2, 3]
        new_a["kernel"]["irqs"] = [10, 11]
        new_a["kernel"]["maps"] = 2
        new_a["kernel"]["debug"] = {"allow_debug": False}

        new_c = make_module("0400000000000003", "gamma")

        diff = diff_npdm.diff_datasets(
            [old_a, old_b],
            [new_a, new_c],
            "old",
            "new",
        )

        self.assertEqual(diff["summary"]["modulesAdded"], 1)
        self.assertEqual(diff["summary"]["modulesRemoved"], 1)
        self.assertEqual(diff["summary"]["modulesChanged"], 1)
        self.assertEqual(diff["summary"]["modulesUnchanged"], 0)
        self.assertEqual(diff["summary"]["syscallsAdded"], 1)
        self.assertEqual(diff["summary"]["syscallsRemoved"], 1)

        self.assertEqual(
            [module["name"] for module in diff["modules"]["added"]],
            ["gamma"],
        )
        self.assertEqual(
            [module["name"] for module in diff["modules"]["removed"]],
            ["beta"],
        )

        changed = diff["modules"]["changed"][0]
        self.assertEqual(changed["programId"], "0400000000000001")
        self.assertEqual(changed["name"], "alpha-renamed")
        self.assertEqual(changed["oldName"], "alpha")
        self.assertEqual(changed["changeCount"], len(changed["changes"]))

        fields = {change["field"]: change for change in changed["changes"]}
        self.assertEqual(fields["version"]["old"], 1)
        self.assertEqual(fields["version"]["new"], 2)
        self.assertEqual(fields["fsPermissions"]["old"], "0000000000000001")
        self.assertEqual(fields["hostsServices"]["added"], ["new:svc"])
        self.assertEqual(fields["hostsServices"]["removed"], ["old:svc"])
        self.assertEqual(fields["kernel.syscalls"]["added"], [3])
        self.assertEqual(fields["kernel.syscalls"]["removed"], [1])
        self.assertEqual(fields["kernel.irqs"]["added"], [11])
        self.assertEqual(fields["kernel.maps"]["old"], 1)
        self.assertEqual(fields["kernel.maps"]["new"], 2)
        self.assertEqual(fields["kernel.debug"]["new"], {"allow_debug": False})

        markdown = diff_npdm.render_markdown(diff)
        self.assertIn("alpha -> alpha-renamed", markdown)
        self.assertIn("Host services", markdown)
        self.assertIn("Syscalls", markdown)

    def test_service_and_family_changes(self):
        old_a = make_module("0400000000000001", "alpha")
        old_a["hostsServices"] = ["foo:svc"]
        old_a["usesServices"] = ["bar:svc"]
        old_b = make_module("0400000000000002", "beta")
        old_b["usesServices"] = ["foo:svc"]

        new_a = make_module("0400000000000001", "alpha")
        new_a["hostsServices"] = ["baz:svc"]
        new_b = make_module("0400000000000002", "beta")
        new_b["usesServices"] = ["foo:svc", "baz:svc"]

        diff = diff_npdm.diff_datasets(
            [old_a, old_b],
            [new_a, new_b],
            "old",
            "new",
        )

        self.assertEqual(
            [service["name"] for service in diff["services"]["added"]],
            ["baz:svc"],
        )
        self.assertEqual(
            [service["name"] for service in diff["services"]["removed"]],
            ["bar:svc"],
        )

        changed = {
            service["name"]: service for service in diff["services"]["changed"]
        }
        self.assertIn("foo:svc", changed)
        foo = changed["foo:svc"]
        self.assertFalse(foo["hostless"]["old"])
        self.assertTrue(foo["hostless"]["new"])
        hosts = [change for change in foo["changes"] if change["field"] == "hosts"][0]
        self.assertEqual(
            hosts["removed"],
            [{"programId": "0400000000000001", "name": "alpha"}],
        )

        self.assertEqual(diff["summary"]["servicesAdded"], 1)
        self.assertEqual(diff["summary"]["servicesRemoved"], 1)
        self.assertEqual(diff["summary"]["servicesChanged"], 1)
        self.assertEqual(diff["summary"]["hostlessTransitions"], 1)
        self.assertEqual(diff["summary"]["serviceHostsRemoved"], 1)
        self.assertEqual(
            [family["name"] for family in diff["families"]["added"]],
            ["baz"],
        )
        self.assertEqual(
            [family["name"] for family in diff["families"]["removed"]],
            ["bar"],
        )

    def test_invalid_input_is_rejected(self):
        with tempfile.TemporaryDirectory() as temp:
            good = Path(temp) / "good.json"
            bad = Path(temp) / "bad.json"
            good.write_text(
                json.dumps([make_module("0400000000000001", "alpha")]),
                encoding="utf-8",
            )
            bad.write_text(json.dumps([]), encoding="utf-8")

            with self.assertRaises(ValueError) as caught:
                diff_npdm.load_dataset(bad)
            self.assertIn("invalid NPDM metadata", str(caught.exception))

            stderr = io.StringIO()
            with contextlib.redirect_stderr(stderr):
                code = diff_npdm.main(["--old", str(good), "--new", str(bad)])
            self.assertEqual(code, 1)
            self.assertIn("invalid NPDM metadata", stderr.getvalue())

    def test_output_formats_and_cli(self):
        old = [make_module("0400000000000001", "alpha")]
        new = [make_module("0400000000000001", "alpha")]
        new[0]["version"] = 2

        diff = diff_npdm.diff_datasets(old, new, "old", "new")
        payload = json.loads(diff_npdm.render_json(diff))
        self.assertEqual(payload["format"], "npdm-diff-v1")
        self.assertEqual(payload["meta"]["oldLabel"], "old")
        self.assertEqual(payload["meta"]["newLabel"], "new")
        self.assertEqual(payload["summary"]["modulesChanged"], 1)

        with tempfile.TemporaryDirectory() as temp:
            old_path = Path(temp) / "old.json"
            new_path = Path(temp) / "new.json"
            old_path.write_text(json.dumps(old), encoding="utf-8")
            new_path.write_text(json.dumps(new), encoding="utf-8")

            markdown_path = Path(temp) / "diff.md"
            code = diff_npdm.main(
                [
                    "--old",
                    str(old_path),
                    "--new",
                    str(new_path),
                    "--old-label",
                    "before",
                    "--new-label",
                    "after",
                    "--out",
                    str(markdown_path),
                ]
            )
            self.assertEqual(code, 0)
            markdown = markdown_path.read_text(encoding="utf-8")
            self.assertTrue(markdown.startswith("# NPDM diff: before -> after"))
            self.assertIn("## Modules changed", markdown)

            json_path = Path(temp) / "diff.json"
            code = diff_npdm.main(
                [
                    "--old",
                    str(old_path),
                    "--new",
                    str(new_path),
                    "--format",
                    "json",
                    "--out",
                    str(json_path),
                ]
            )
            self.assertEqual(code, 0)
            self.assertEqual(
                json.loads(json_path.read_text(encoding="utf-8"))["format"],
                "npdm-diff-v1",
            )


if __name__ == "__main__":
    unittest.main()
