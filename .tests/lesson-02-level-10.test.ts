import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 10 — Debugging & Fixing Common Mistakes", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-10",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("has no duplicate id attributes", () => {
    expect(doc).toBeTruthy();
    const ids = Array.from(doc!.querySelectorAll("[id]")).map((e) =>
      e.getAttribute("id"),
    );
    const dup = ids.filter((v, i, a) => v && a.indexOf(v) !== i);
    expect(dup.length).toBe(0);
  });

  it("contains a submit control", () => {
    expect(doc).toBeTruthy();
    expect(
      doc!.querySelector('button[type="submit"], input[type="submit"], button'),
    ).toBeTruthy();
  });
});
