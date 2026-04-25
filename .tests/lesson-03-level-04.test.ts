import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 04 — Default Element Styles", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-04",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains an h1 element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("h1")).toBeTruthy();
  });

  it("contains a p element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("p")).toBeTruthy();
  });
});
