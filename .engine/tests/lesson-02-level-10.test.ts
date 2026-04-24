import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 10 — Debugging & Fixing Common Mistakes", () => {
  it("ensures there are no duplicate ids and a submit control exists", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-10",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const ids = Array.from(doc.querySelectorAll("[id]")).map((e) =>
      e.getAttribute("id"),
    );
    const dup = ids.filter((v, i, a) => v && a.indexOf(v) !== i);
    if (dup.length)
      throw new Error(
        "Helpful Hint: Duplicate id attributes found. Ensure each id is unique.",
      );
    if (
      !doc.querySelector('button[type="submit"], input[type="submit"], button')
    )
      throw new Error(
        "Helpful Hint: Include a submit control so the form can be submitted.",
      );
  });
});
