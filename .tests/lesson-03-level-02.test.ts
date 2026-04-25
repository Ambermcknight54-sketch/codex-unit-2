import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 02 — Visualize with HTML/CSS", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-03-box-model",
      "level-02",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains .layer-margin element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".layer-margin")).toBeTruthy();
  });

  it("contains .layer-border element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".layer-border")).toBeTruthy();
  });

  it("contains .layer-padding element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".layer-padding")).toBeTruthy();
  });

  it("contains .layer-content element", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector(".layer-content")).toBeTruthy();
  });
});
