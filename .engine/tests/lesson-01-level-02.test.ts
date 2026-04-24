import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 02 — Headings & Outline", () => {
  it("contains exactly one h1 and a sensible heading structure", () => {
    const doc = loadDocument(2, "lesson-01-semantic-tags");
    const h1s = doc.querySelectorAll("h1");
    expect(h1s.length).toBeGreaterThanOrEqual(1);
    // Prefer exactly one h1 for accessible outlines
    expect(h1s.length).toBe(1);
  });
});
