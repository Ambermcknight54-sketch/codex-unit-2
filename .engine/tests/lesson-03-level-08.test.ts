import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 08 — Challenge: Debug & Build", () => {
  it("includes a container and item elements for the challenge", () => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-08",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const container = doc.querySelector(".container");
    const items = doc.querySelectorAll(".item");
    if (!container || items.length < 2) {
      throw new Error(
        "Helpful Hint: Provide a .container element and at least two .item elements to fix spacing and overflow.",
      );
    }
  });
});
