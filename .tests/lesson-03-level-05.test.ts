import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 05 — Inline vs Block Elements", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-05",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains .demo-inline element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".demo-inline")).toBeTruthy();
  });

  it("contains .demo-block element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".demo-block")).toBeTruthy();
  });
});
