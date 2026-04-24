import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 03 — Landmark Elements", () => {
  it("includes header, nav, main, and footer landmarks", () => {
    const doc = loadDocument(3, "lesson-01-semantic-tags");
    const header = doc.querySelector("header");
    const nav = doc.querySelector("nav");
    const main = doc.querySelector("main");
    const footer = doc.querySelector("footer");

    expect(header).toBeTruthy();
    expect(nav).toBeTruthy();
    expect(main).toBeTruthy();
    expect(footer).toBeTruthy();
  });
});
