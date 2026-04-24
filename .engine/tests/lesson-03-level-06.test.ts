import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 06 — Combining Layout Rules", () => {
  it("includes two column elements for a simple layout", () => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-06",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const left = doc.querySelector(".col.left");
    const right = doc.querySelector(".col.right");
    if (!left || !right) {
      throw new Error(
        "Helpful Hint: Add two column elements with classes .col.left and .col.right to build the two-column layout.",
      );
    }
  });
});
