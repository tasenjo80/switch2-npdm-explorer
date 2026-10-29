import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGE = ROOT / "site" / "compatibility.html"
INDEX = ROOT / "site" / "index.html"


class TagCollector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

    def handle_startendtag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


class CompatibilityPageTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        parser = TagCollector()
        parser.feed(PAGE.read_text(encoding="utf-8"))
        cls.tags = parser.tags
        cls.text = PAGE.read_text(encoding="utf-8")

    def tags_with(self, tag=None, **attrs):
        return [
            (name, values)
            for name, values in self.tags
            if (tag is None or name == tag)
            and all(values.get(key) == value for key, value in attrs.items())
        ]

    def test_explorer_links_to_page(self):
        parser = TagCollector()
        parser.feed(INDEX.read_text(encoding="utf-8"))
        links = [attrs.get("href") for tag, attrs in parser.tags if tag == "a"]
        self.assertIn("compatibility.html", links)

    def test_page_links_back_and_has_sections(self):
        links = [attrs.get("href") for tag, attrs in self.tags if tag == "a"]
        self.assertIn("index.html", links)

        headings = [
            attrs for tag, attrs in self.tags if tag == "h2" and attrs.get("id")
        ]
        self.assertGreaterEqual(len(headings), 6)
        self.assertIn("2026-10-29", self.text)
        self.assertIn("Community report", self.text)
        self.assertIn("ns2jb2", self.text)
        self.assertIn("ns2-savekit", self.text)
        self.assertIn("MintBrew", self.text)

    def test_ids_are_unique(self):
        ids = [attrs["id"] for _, attrs in self.tags if "id" in attrs]
        self.assertEqual(len(ids), len(set(ids)))

    def test_tables_are_accessible(self):
        wrappers = [
            attrs
            for _, attrs in self.tags
            if "table-wrap" in attrs.get("class", "").split()
        ]
        self.assertEqual(len(wrappers), 3)
        for attrs in wrappers:
            self.assertEqual(attrs.get("role"), "region")
            self.assertEqual(attrs.get("tabindex"), "0")
            self.assertTrue(attrs.get("aria-label"))

        tables = self.tags_with("table")
        self.assertEqual(len(tables), 3)
        for _, attrs in tables:
            self.assertIn("compat-table", attrs.get("class", "").split())

        self.assertEqual(len(self.tags_with("caption")), 3)
        headers = self.tags_with("th")
        self.assertGreaterEqual(len(headers), 16)
        for _, attrs in headers:
            self.assertIn(attrs.get("scope"), {"col", "row"})


if __name__ == "__main__":
    unittest.main()
