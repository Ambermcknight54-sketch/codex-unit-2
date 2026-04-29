import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 03 — Message Field & Submit", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-03",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains a textarea", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("textarea")).toBeTruthy();
  });

  it("contains a submit control", () => {
    expect(doc).toBeTruthy();
    expect(
      doc!.querySelector('button[type="submit"], input[type="submit"], button'),
    ).toBeTruthy();
  });
});
