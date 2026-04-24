import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 05 — Inline vs Block Elements", () => {
  it("provides examples of inline and block elements", () => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-05",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const inline = doc.querySelector(".demo-inline");
    const block = doc.querySelector(".demo-block");
    if (!inline || !block) {
      throw new Error(
        "Helpful Hint: Add elements with classes .demo-inline and .demo-block to compare display types.",
      );
    }
  });
});
