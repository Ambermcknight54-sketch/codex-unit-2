import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 04 — Input Types", () => {
  it("contains common input types: email, tel, password, number, range, file", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-04",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const types = ["email", "tel", "password", "number", "range", "file"];
    const missing = types.filter(
      (t) => !doc.querySelector(`input[type="${t}"]`),
    );
    if (missing.length)
      throw new Error(
        `Helpful Hint: Add inputs with types: ${missing.join(", ")}.`,
      );
  });
});
