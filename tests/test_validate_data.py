import copy
import importlib.util
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MODULE_PATH = ROOT / "tools" / "validate_data.py"
DATA = ROOT / "data" / "npdm-metadata.json"

spec = importlib.util.spec_from_file_location("validate_data", MODULE_PATH)
validate_data = importlib.util.module_from_spec(spec)
spec.loader.exec_module(validate_data)


class ValidateDataTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.modules = json.loads(DATA.read_text(encoding="utf-8"))

    def test_current_dataset_is_valid(self):
        self.assertEqual(validate_data.validate_modules(self.modules), [])

    def test_bad_program_id(self):
        modules = copy.deepcopy(self.modules)
        modules[0]["programId"] = "zzzz"
        errors = validate_data.validate_modules(modules)
        self.assertTrue(any("programId must be" in error for error in errors))

    def test_wrong_permission_length(self):
        modules = copy.deepcopy(self.modules)
        modules[0]["fsPermissions"] = "1234"
        errors = validate_data.validate_modules(modules)
        self.assertTrue(any("fsPermissions must be" in error for error in errors))

    def test_duplicate_program_id(self):
        modules = copy.deepcopy(self.modules)
        modules.append(copy.deepcopy(modules[0]))
        errors = validate_data.validate_modules(modules)
        self.assertTrue(any("duplicate programId" in error for error in errors))

    def test_missing_kernel(self):
        modules = copy.deepcopy(self.modules)
        del modules[0]["kernel"]
        errors = validate_data.validate_modules(modules)
        self.assertTrue(any("kernel must be an object" in error for error in errors))

    def test_mismatched_file_path(self):
        modules = copy.deepcopy(self.modules)
        modules[0]["file"] = "dumps/system-code/0000000000000000/main.npdm"
        errors = validate_data.validate_modules(modules)
        self.assertTrue(any("file path must end with" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
