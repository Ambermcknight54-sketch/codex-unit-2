import { readFileSync } from "fs";
import { JSDOM } from "jsdom";

const path = require("path");

describe("Level 01 — Intro & Boilerplate", () => {
  it("contains a form, an input, and a submit button", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-01",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    if (!doc.querySelector("form"))
      throw new Error("Helpful Hint: Add a <form> element in the page.");
    if (!doc.querySelector("input"))
      throw new Error(
        "Helpful Hint: Add at least one <input> inside the form.",
      );
    if (
      !doc.querySelector('button[type="submit"], input[type="submit"], button')
    )
      throw new Error(
        'Helpful Hint: Add a submit control (a <button type="submit"> or input[type="submit"]) so the form can be submitted.',
      );
  });
});
