import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 06 — Combining Layout Rules", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-06",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains .col.left element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".col.left")).toBeTruthy();
  });

  it("contains .col.right element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".col.right")).toBeTruthy();
  });
});
