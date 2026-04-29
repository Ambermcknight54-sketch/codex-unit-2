import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 11 — Integrate & Polish", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-11",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("contains a form", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("form")).toBeTruthy();
  });

  it("has form controls", () => {
    expect(doc).toBeTruthy();
    const controls = Array.from(
      doc!.querySelectorAll("input, textarea, select"),
    );
    expect(controls.length).toBeGreaterThan(0);
  });

  it("all controls have accessible labels", () => {
    expect(doc).toBeTruthy();
    const controls = Array.from(
      doc!.querySelectorAll("input, textarea, select"),
    );
    const labeled = controls.filter((c) => {
      const id = c.getAttribute("id");
      if (id && doc!.querySelector(`label[for="${id}"]`)) return true;
      let p = c.parentElement;
      while (p) {
        if (p.tagName && p.tagName.toLowerCase() === "label") return true;
        p = p.parentElement;
      }
      return false;
    });
    expect(labeled.length).toBe(controls.length);
  });

  it("marks at least one field as required", () => {
    expect(doc).toBeTruthy();
    expect(doc!.querySelector("[required]")).toBeTruthy();
  });
});
