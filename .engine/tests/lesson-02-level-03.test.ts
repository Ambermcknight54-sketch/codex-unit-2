import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 03 — Message Field & Submit", () => {
  it("has a textarea and a submit control", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-03",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    if (!doc.querySelector("textarea"))
      throw new Error("Helpful Hint: Add a <textarea> for the message body.");
    if (
      !doc.querySelector('button[type="submit"], input[type="submit"], button')
    )
      throw new Error(
        "Helpful Hint: Add a submit control so students can submit the form.",
      );
  });
});
