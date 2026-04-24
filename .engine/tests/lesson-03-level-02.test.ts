import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 02 — Visualize with HTML/CSS", () => {
  it("includes nested elements for margin, border, padding, and content", () => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-02",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const margin = doc.querySelector(".layer-margin");
    const border = doc.querySelector(".layer-border");
    const padding = doc.querySelector(".layer-padding");
    const content = doc.querySelector(".layer-content");

    if (!margin || !border || !padding || !content) {
      throw new Error(
        "Helpful Hint: Add nested elements with classes .layer-margin, .layer-border, .layer-padding, and .layer-content to represent each box layer.",
      );
    }
  });
});
