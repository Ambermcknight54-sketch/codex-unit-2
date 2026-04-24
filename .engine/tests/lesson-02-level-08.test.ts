import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 08 — Grouping Controls", () => {
  it("uses fieldset and legend to group related controls", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-08",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    if (!doc.querySelector("fieldset"))
      throw new Error("Helpful Hint: Group related controls using <fieldset>.");
    if (!doc.querySelector("legend"))
      throw new Error(
        "Helpful Hint: Add a <legend> describing the fieldset group.",
      );
  });
});
