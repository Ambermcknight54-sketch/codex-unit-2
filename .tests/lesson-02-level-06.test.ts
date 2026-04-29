import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 06 — Radios & Checkboxes", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-06",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("has at least two radio inputs", () => {
    expect(doc).toBeTruthy();
    const radios = Array.from(doc!.querySelectorAll('input[type="radio"]'));
    expect(radios.length).toBeGreaterThanOrEqual(2);
  });

  it("radio group inputs share the same name", () => {
    expect(doc).toBeTruthy();
    const radios = Array.from(doc!.querySelectorAll('input[type="radio"]'));
    const names = new Set(radios.map((r) => r.getAttribute("name")));
    expect(names.size).toBeLessThanOrEqual(1);
  });

  it("contains at least one checkbox", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector('input[type="checkbox"]')).toBeTruthy();
  });
});
