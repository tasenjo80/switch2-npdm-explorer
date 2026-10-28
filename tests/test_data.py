import json
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "npdm-metadata.json"
DATA_JS = ROOT / "site" / "data.js"

HEX16 = re.compile(r"^[0-9a-f]{16}$")
REQUIRED = {
    "file",
    "name",
    "programId",
    "is64Bit",
    "addressSpace",
    "mainThreadPriority",
    "mainThreadCore",
    "mainThreadStackSize",
    "systemResourceSize",
    "version",
    "productCode",
    "fsPermissions",
    "hostsServices",
    "usesServices",
    "acidHostsServices",
    "kernel",
}


class DataTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.modules = json.loads(DATA.read_text(encoding="utf-8"))

    def test_dataset_is_present(self):
        self.assertIsInstance(self.modules, list)
        self.assertEqual(len(self.modules), 64)

    def test_required_fields_and_types(self):
        for module in self.modules:
            self.assertEqual(REQUIRED - set(module), set(), module.get("name"))
            self.assertRegex(module["programId"], HEX16)
            self.assertRegex(module["fsPermissions"], HEX16)
            self.assertIsInstance(module["hostsServices"], list)
            self.assertIsInstance(module["usesServices"], list)
            self.assertTrue(all(isinstance(item, str) for item in module["hostsServices"]))
            self.assertTrue(all(isinstance(item, str) for item in module["usesServices"]))
            self.assertIsInstance(module["kernel"], dict)
            self.assertIsInstance(module["kernel"].get("syscalls"), list)
            self.assertTrue(all(isinstance(item, int) for item in module["kernel"]["syscalls"]))

    def test_generated_site_data(self):
        self.assertTrue(DATA_JS.exists())
        text = DATA_JS.read_text(encoding="utf-8")
        self.assertTrue(text.startswith("window.NPDM_DATA = "))
        payload = json.loads(text[text.index("{") : text.rindex("}") + 1])
        self.assertEqual(payload["moduleCount"], len(self.modules))
        self.assertEqual(payload["snapshotDate"], "2026-10-24")
        self.assertEqual(payload["reviewedDate"], "2026-10-27")
        self.assertGreater(payload["serviceCount"], 0)
        self.assertGreater(payload["familyCount"], 0)
        for key in ("builtinGaps", "builtinFamilies", "hostLeverage", "widestClients", "clusters"):
            self.assertIn(key, payload["insights"])

    def test_no_console_binaries(self):
        forbidden = {".npdm", ".nca", ".nsp", ".xci", ".nro", ".nso"}
        found = [
            str(path.relative_to(ROOT))
            for path in ROOT.rglob("*")
            if path.is_file()
            and path.suffix.lower() in forbidden
            and not any(part in {".git", "node_modules"} for part in path.parts)
        ]
        self.assertEqual(found, [])

    def test_no_private_research_exports(self):
        self.assertFalse((ROOT / "discord-export").exists())
        self.assertFalse((ROOT / "screenshots").exists())


if __name__ == "__main__":
    unittest.main()
