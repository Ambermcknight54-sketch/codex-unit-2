import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 08 — Grouping Controls", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-08",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains a fieldset", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("fieldset")).toBeTruthy();
  });

  it("contains a legend", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("legend")).toBeTruthy();
  });
});
