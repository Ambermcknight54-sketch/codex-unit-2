import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 02 — Name & Email Inputs", () => {
  it("includes a text input and an email input", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-02",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const textInput = doc.querySelector(
      'input[type="text"], input:not([type])',
    );
    const emailInput = doc.querySelector('input[type="email"]');

    if (!textInput)
      throw new Error(
        'Helpful Hint: Add a text input for the user name (e.g., <input type="text">).',
      );
    if (!emailInput)
      throw new Error(
        'Helpful Hint: Add an email input using <input type="email"> so browsers can validate it.',
      );
  });
});
