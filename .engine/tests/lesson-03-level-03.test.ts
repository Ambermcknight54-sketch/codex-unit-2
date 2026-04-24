import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 03 — Padding / Border / Margin Deep Dive", () => {
  it("has a demo box element to adjust padding/border/margin", () => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-03",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const demo = doc.querySelector("#demo-box") || doc.querySelector(".demo");
    if (!demo) {
      throw new Error(
        'Helpful Hint: Add an element with id="demo-box" or class="demo" so students can modify padding, border, and margin in CSS.',
      );
    }
  });
});
