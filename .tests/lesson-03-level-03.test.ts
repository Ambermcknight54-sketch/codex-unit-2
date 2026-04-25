import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 03 — Padding / Border / Margin Deep Dive", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-03",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains #demo-box or .demo element", () => {
    expect(doc).toBeTruthy();
    const demo = doc!.querySelector("#demo-box") || doc!.querySelector(".demo");
    expect(demo).toBeTruthy();
  });
});
