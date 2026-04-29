import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 09 — Basic Validation", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-09",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("has at least one required field", () => {
    expect(doc).toBeTruthy();
    const hasRequired = !!doc!.querySelector("[required]");
    expect(hasRequired).toBeTruthy();
  });

  it("range inputs include min and max when present", () => {
    expect(doc).toBeTruthy();
    const range = doc!.querySelector('input[type="range"]');
    expect(
      !range ||
        (range.getAttribute("min") !== null &&
          range.getAttribute("max") !== null),
    ).toBeTruthy();
  });
});
