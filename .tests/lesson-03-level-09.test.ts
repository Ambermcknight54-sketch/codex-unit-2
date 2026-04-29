import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 09 — Challenge: Debug & Build (Unguided)", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-09",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains a .container element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".container")).toBeTruthy();
  });

  it("contains at least two .item elements", () => {
    expect(doc).toBeTruthy();
    const items = doc!.querySelectorAll(".item");
    expect(items.length).toBeGreaterThanOrEqual(2);
  });
});
