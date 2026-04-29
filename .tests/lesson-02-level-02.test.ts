import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 02 — Name & Email Inputs", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-02",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains a text input", () => {
    expect(doc).toBeTruthy();
    expect(
      doc!.querySelector('input[type="text"], input:not([type])'),
    ).toBeTruthy();
  });

  it("contains an email input", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector('input[type="email"]')).toBeTruthy();
  });
});
