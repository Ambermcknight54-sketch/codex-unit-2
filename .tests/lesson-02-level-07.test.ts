import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

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
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-07",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("has form controls to label", () => {
    expect(doc).toBeTruthy();
    const controls = Array.from(
      doc!.querySelectorAll("input, textarea, select"),
    );
    expect(controls.length).toBeGreaterThan(0);
  });

  it("all key controls have accessible labels", () => {
    expect(doc).toBeTruthy();
    const controls = Array.from(
      doc!.querySelectorAll("input, textarea, select"),
    );
    const unlabeled = controls.filter((c) => !hasLabelFor(c));
    expect(unlabeled.length).toBe(0);
  });
});
