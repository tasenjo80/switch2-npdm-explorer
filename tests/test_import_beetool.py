import importlib.util
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MODULE_PATH = ROOT / "tools" / "import_beetool.py"
FIXTURE = ROOT / "tests" / "fixtures" / "beetool-sample.json"

spec = importlib.util.spec_from_file_location("import_beetool", MODULE_PATH)
import_beetool = importlib.util.module_from_spec(spec)
spec.loader.exec_module(import_beetool)


class BeetoolImportTests(unittest.TestCase):
    def test_map_npdm(self):
        raw = json.loads(FIXTURE.read_text(encoding="utf-8"))
        module = import_beetool.map_npdm(raw)

        self.assertIsNotNone(module)
        self.assertEqual(module["programId"], "040000000000001f")
        self.assertEqual(module["name"], "ns")
        self.assertTrue(module["is64Bit"])
        self.assertEqual(module["addressSpace"], 3)
        self.assertEqual(module["fsPermissions"], "000000140c215859")
        self.assertEqual(module["hostsServices"], ["ns:am2", "ns:dev"])
        self.assertEqual(module["usesServices"], ["fsp-srv", "set:sys"])
        self.assertEqual(module["kernel"]["syscalls"], [1, 2])
        self.assertEqual(module["kernel"]["maps"], 2)
        self.assertEqual(module["kernel"]["irqs"], [94])
        self.assertEqual(module["kernel"]["handleTable"], 256)
        self.assertEqual(module["kernel"]["appletType"], 1)
        self.assertEqual(module["kernel"]["debug"], {"allow_debug": False, "force_debug": True})
        self.assertEqual(module["file"], "dumps/system-code/040000000000001f/main.npdm")

    def test_missing_title_id_is_skipped(self):
        self.assertIsNone(import_beetool.map_npdm({"name": "no-id"}))


if __name__ == "__main__":
    unittest.main()
