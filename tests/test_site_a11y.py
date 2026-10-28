import re
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "site" / "index.html"
STYLE = ROOT / "site" / "style.css"


def luminance(color):
    values = [int(color[index : index + 2], 16) / 255 for index in (1, 3, 5)]
    linear = [
        value / 12.92 if value <= 0.04045 else ((value + 0.055) / 1.055) ** 2.4
        for value in values
    ]
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2]


def contrast_ratio(first, second):
    first_luminance = luminance(first)
    second_luminance = luminance(second)
    lighter = max(first_luminance, second_luminance)
    darker = min(first_luminance, second_luminance)
    return (lighter + 0.05) / (darker + 0.05)


class TagCollector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

    def handle_startendtag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


class SiteAccessibilityTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        parser = TagCollector()
        parser.feed(INDEX.read_text(encoding="utf-8"))
        cls.tags = parser.tags

    def tags_with(self, tag=None, **attrs):
        return [
            (name, values)
            for name, values in self.tags
            if (tag is None or name == tag)
            and all(values.get(key) == value for key, value in attrs.items())
        ]

    def test_tabs_and_panels_are_linked(self):
        tablist = self.tags_with(role="tablist")
        self.assertEqual(len(tablist), 1)
        self.assertEqual(tablist[0][0], "div")

        tabs = self.tags_with("button", role="tab")
        self.assertEqual(len(tabs), 5)
        self.assertEqual(
            [attrs.get("aria-selected") for _, attrs in tabs],
            ["true", "false", "false", "false", "false"],
        )
        self.assertEqual(
            [attrs.get("tabindex") for _, attrs in tabs],
            ["0", "-1", "-1", "-1", "-1"],
        )

        for _, tab in tabs:
            self.assertTrue(tab.get("id"))
            self.assertTrue(tab.get("aria-controls"))
            panel_id = tab["aria-controls"]
            panels = self.tags_with("section", id=panel_id, role="tabpanel")
            self.assertEqual(len(panels), 1, panel_id)
            self.assertEqual(panels[0][1].get("aria-labelledby"), tab["id"])

    def test_ids_are_unique(self):
        ids = [attrs["id"] for _, attrs in self.tags if "id" in attrs]
        self.assertEqual(len(ids), len(set(ids)))

    def test_table_wrappers_are_keyboard_scrollable(self):
        wrappers = [
            attrs
            for _, attrs in self.tags
            if "table-wrap" in attrs.get("class", "").split()
        ]
        self.assertEqual(len(wrappers), 4)
        for attrs in wrappers:
            self.assertEqual(attrs.get("tabindex"), "0")
            self.assertTrue(attrs.get("aria-label"))

    def test_table_headers_have_scope(self):
        headers = self.tags_with("th")
        self.assertGreaterEqual(len(headers), 20)
        for _, attrs in headers:
            self.assertEqual(attrs.get("scope"), "col")

    def test_text_tokens_have_aa_contrast(self):
        text = STYLE.read_text(encoding="utf-8")
        colors = {
            name: value
            for name, value in re.findall(r"--([a-z0-9-]+):\s*(#[0-9a-fA-F]{6});", text)
        }
        backgrounds = [
            colors["bg"],
            colors["bg-soft"],
            colors["panel"],
            colors["panel-2"],
            colors["panel-3"],
        ]
        for token in ("text", "muted", "faint"):
            for background in backgrounds:
                self.assertGreaterEqual(
                    contrast_ratio(colors[token], background),
                    4.5,
                    f"--{token} on {background}",
                )


if __name__ == "__main__":
    unittest.main()
