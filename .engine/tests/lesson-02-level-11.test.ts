import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

describe("Level 11 — Integrate & Polish", () => {
  it("verifies integration checks: form, labels, and at least one required field", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-11",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    if (!doc.querySelector("form"))
      throw new Error(
        "Helpful Hint: Add a <form> element to integrate components.",
      );
    const controls = Array.from(
      doc.querySelectorAll("input, textarea, select"),
    );
    if (controls.length === 0)
      throw new Error("Helpful Hint: Add some form controls to integrate.");
    const labeled = controls.filter((c) => {
      const id = c.getAttribute("id");
      if (id && doc.querySelector(`label[for="${id}"]`)) return true;
      let p = c.parentElement;
      while (p) {
        if (p.tagName && p.tagName.toLowerCase() === "label") return true;
        p = p.parentElement;
      }
      return false;
    });
    if (labeled.length !== controls.length)
      throw new Error(
        "Helpful Hint: Ensure all controls have accessible labels before polishing.",
      );
    if (!doc.querySelector("[required]"))
      throw new Error("Helpful Hint: Mark at least one key field as required.");
  });
});
