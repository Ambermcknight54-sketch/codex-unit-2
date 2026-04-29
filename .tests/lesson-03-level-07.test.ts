import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 07 — Box-Sizing & Responsive Considerations", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-07",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains #box-a element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("#box-a")).toBeTruthy();
  });

  it("contains #box-b element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("#box-b")).toBeTruthy();
  });
});
