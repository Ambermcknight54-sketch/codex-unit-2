import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 02 — Headings & Outline", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(2, "lesson-01-semantic-tags");
  });

  it("includes at least one h1 heading", () => {
    const h1s = doc.querySelectorAll("h1") ?? [];
    expect(h1s.length).toBeGreaterThanOrEqual(1);
  });

  it("contains exactly one top-level h1", () => {
    const h1s = doc.querySelectorAll("h1") ?? [];
    expect(h1s.length).toBe(1);
  });

  it("does not skip heading levels in document order", () => {
    const headings = Array.from(
      doc.querySelectorAll("h1,h2,h3,h4,h5,h6"),
    ) as Element[];
    if (headings.length <= 1) {
      // Nothing to skip if zero or one heading
      expect(true).toBe(true);
      return;
    }

    // Map tagName to numeric level (h1 -> 1, h2 -> 2, ...)
    const levels = headings.map((h) =>
      parseInt(h.tagName.replace("H", ""), 10),
    );

    // Ensure the first heading is an h1 (recommended)
    expect(levels[0]).toBe(1);

    // Ensure level increases never jump by more than 1
    for (let i = 1; i < levels.length; i++) {
      const prev = levels[i - 1];
      const cur = levels[i];
      expect(cur - prev).toBeLessThanOrEqual(1);
    }
  });
});
