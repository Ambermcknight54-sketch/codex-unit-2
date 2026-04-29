import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 04 — Input Types", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-04",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  const types = ["email", "tel", "password", "number", "range", "file"];
  types.forEach((t) => {
    it(`contains input type: ${t}`, () => {
      expect(doc).toBeTruthy();
      expect(doc!.querySelector(`input[type="${t}"]`)).toBeTruthy();
    });
  });
});
