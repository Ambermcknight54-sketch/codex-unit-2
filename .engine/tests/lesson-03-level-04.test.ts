import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 04 — Default Element Styles", () => {
  it("includes headings and paragraphs to inspect default margins", () => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-04",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const h1 = doc.querySelector("h1");
    const p = doc.querySelector("p");
    if (!h1 || !p) {
      throw new Error(
        "Helpful Hint: Include an <h1> and a <p> so students can view and override user-agent default margins.",
      );
    }
  });
});
