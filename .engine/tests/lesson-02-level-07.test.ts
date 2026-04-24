import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
const path = require("path");

function hasLabelFor(element) {
  const id = element.getAttribute("id");
  if (id && element.ownerDocument.querySelector(`label[for="${id}"]`))
    return true;
  // check if element is wrapped by a label
  let parent = element.parentElement;
  while (parent) {
    if (parent.tagName && parent.tagName.toLowerCase() === "label") return true;
    parent = parent.parentElement;
  }
  return false;
}

describe("Level 07 — Labels & Accessibility", () => {
  it("ensures key controls have accessible labels", () => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-07",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    const doc = new JSDOM(html).window.document;

    const controls = Array.from(
      doc.querySelectorAll("input, textarea, select"),
    );
    if (controls.length === 0)
      throw new Error(
        "Helpful Hint: Add form controls (inputs, textarea, or select) to label.",
      );

    const unlabeled = controls.filter((c) => !hasLabelFor(c));
    if (unlabeled.length)
      throw new Error(
        'Helpful Hint: Ensure each control has an accessible label: either a <label for="id"> or wrap the input inside a <label>.',
      );
  });
});
