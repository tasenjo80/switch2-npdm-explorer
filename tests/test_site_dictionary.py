import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DICTIONARY = ROOT / "site" / "dictionary.html"
INDEX = ROOT / "site" / "index.html"
COMPATIBILITY = ROOT / "site" / "compatibility.html"


class TagCollector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

    def handle_startendtag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


class DictionaryPageTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        parser = TagCollector()
        parser.feed(DICTIONARY.read_text(encoding="utf-8"))
        cls.tags = parser.tags
        cls.text = DICTIONARY.read_text(encoding="utf-8")

    def tags_with(self, tag=None, **attrs):
        return [
            (name, values)
            for name, values in self.tags
            if (tag is None or name == tag)
            and all(values.get(key) == value for key, value in attrs.items())
        ]

    def test_page_has_expected_sections(self):
        self.assertIn("Data dictionary", self.text)
        headings = {
            attrs.get("id")
            for tag, attrs in self.tags
            if tag == "h2" and attrs.get("id")
        }
        for heading in (
            "module-fields",
            "fs-permissions",
            "kernel-fields",
            "service-graph",
            "derived-fields",
            "limits",
        ):
            self.assertIn(heading, headings)

    def test_tables_are_accessible(self):
        wrappers = [
            attrs
            for _, attrs in self.tags
            if "table-wrap" in attrs.get("class", "").split()
        ]
        self.assertGreaterEqual(len(wrappers), 5)
        for attrs in wrappers:
            self.assertEqual(attrs.get("role"), "region")
            self.assertEqual(attrs.get("tabindex"), "0")
            self.assertTrue(attrs.get("aria-label"))

        tables = self.tags_with("table")
        self.assertGreaterEqual(len(tables), 5)
        for _, attrs in tables:
            self.assertIn("compat-table", attrs.get("class", "").split())

        headers = self.tags_with("th")
        self.assertGreaterEqual(len(headers), 20)
        for _, attrs in headers:
            self.assertIn(attrs.get("scope"), {"col", "row"})

    def test_links_and_no_scripts(self):
        self.assertEqual(self.tags_with("script"), [])
        self.assertNotIn("http://", self.text)
        self.assertNotIn("discord-export", self.text)
        self.assertNotIn("public-monitor", self.text)
        self.assertNotIn("settings.toml", self.text)

        links = [attrs.get("href", "") for tag, attrs in self.tags if tag == "a"]
        self.assertIn("index.html", links)
        self.assertIn("compatibility.html", links)
        self.assertTrue(any("schema.json" in link for link in links))
        self.assertTrue(any("methodology.md" in link for link in links))
        self.assertTrue(any("scope.md" in link for link in links))

        for source in (INDEX, COMPATIBILITY):
            source_parser = TagCollector()
            source_parser.feed(source.read_text(encoding="utf-8"))
            source_links = [
                attrs.get("href", "")
                for tag, attrs in source_parser.tags
                if tag == "a"
            ]
            self.assertIn("dictionary.html", source_links)


if __name__ == "__main__":
    unittest.main()
