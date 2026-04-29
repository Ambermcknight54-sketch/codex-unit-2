import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 05 — Select, Optgroup & Options", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-05",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains a select element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("select")).toBeTruthy();
  });

  it("select has at least two options", () => {
    expect(doc).toBeTruthy();
    const select = doc!.querySelector("select");
    const options = select ? select.querySelectorAll("option") : [];
    expect(options.length).toBeGreaterThanOrEqual(2);
  });

  it("contains an optgroup", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("optgroup")).toBeTruthy();
  });
});
