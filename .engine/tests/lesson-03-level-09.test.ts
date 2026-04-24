import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 09 — Challenge: Debug & Build (Unguided)", () => {
  it("includes a .container and at least two .item elements", () => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-09",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const container = doc.querySelector(".container");
    const items = doc.querySelectorAll(".item");
    if (!container || items.length < 2) {
      throw new Error(
        "Helpful Hint: Provide a .container element and at least two .item elements for the unguided challenge.",
      );
    }
  });
});
