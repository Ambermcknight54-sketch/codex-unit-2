import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 06 — Radios & Checkboxes", () => {
  it("has radio groups sharing the same name and at least one checkbox", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-06",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const radios = Array.from(doc.querySelectorAll('input[type="radio"]'));
    if (radios.length < 2)
      throw new Error(
        "Helpful Hint: Add at least two radio inputs to form a choice group.",
      );
    const names = new Set(radios.map((r) => r.getAttribute("name")));
    if (names.size > 1)
      throw new Error(
        "Helpful Hint: Radio inputs that belong to the same group should share the same name attribute.",
      );
    if (!doc.querySelector('input[type="checkbox"]'))
      throw new Error(
        "Helpful Hint: Add at least one checkbox input for multiple selections.",
      );
  });
});
