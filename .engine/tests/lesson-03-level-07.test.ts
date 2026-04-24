import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 07 — Box-Sizing & Responsive Considerations", () => {
  it("provides example elements to compare box-sizing behavior", () => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-07",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const a = doc.querySelector("#box-a");
    const b = doc.querySelector("#box-b");
    if (!a || !b) {
      throw new Error(
        "Helpful Hint: Include examples with ids #box-a and #box-b so students can compare content-box vs border-box behavior.",
      );
    }
  });
});
