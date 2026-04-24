import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 05 — Select, Optgroup & Options", () => {
  it("has a select with at least two options and an optgroup", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-05",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const select = doc.querySelector("select");
    if (!select)
      throw new Error("Helpful Hint: Add a <select> element with options.");
    const options = select ? select.querySelectorAll("option") : [];
    if (options.length < 2)
      throw new Error(
        "Helpful Hint: Add at least two <option> elements inside the <select>.",
      );
    if (!doc.querySelector("optgroup"))
      throw new Error("Helpful Hint: Use <optgroup> to group related options.");
  });
});
