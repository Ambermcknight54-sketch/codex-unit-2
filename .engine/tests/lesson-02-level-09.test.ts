import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 09 — Basic Validation", () => {
  it("checks for required and range min/max where appropriate", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-09",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const hasRequired = !!doc.querySelector("[required]");
    if (!hasRequired)
      throw new Error(
        "Helpful Hint: Mark at least one important field as required using the `required` attribute.",
      );

    const range = doc.querySelector('input[type="range"]');
    if (range) {
      const min = range.getAttribute("min");
      const max = range.getAttribute("max");
      if (min === null || max === null)
        throw new Error(
          "Helpful Hint: For range inputs, include both `min` and `max` attributes.",
        );
    }
  });
});
