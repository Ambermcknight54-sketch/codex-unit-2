import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 05 — Sections & Articles", () => {
  it("groups related content with section or article that include headings", () => {
    const doc = loadDocument(5, "lesson-01-semantic-tags");
    const groups = Array.from(doc.querySelectorAll("section, article"));
    expect(groups.length).toBeGreaterThanOrEqual(1);
    const hasHeadingInGroup = groups.some((g) =>
      g.querySelector("h1, h2, h3, h4, h5, h6"),
    );
    expect(hasHeadingInGroup).toBe(true);
  });
});
