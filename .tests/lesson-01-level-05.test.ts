import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 05 — Sections & Articles", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(5, "lesson-01-semantic-tags");
  });

  it("includes at least one section or article element", () => {
    const groups = Array.from(doc.querySelectorAll("section, article"));
    expect(groups.length).toBeGreaterThanOrEqual(1);
  });

  it("ensures at least one section/article contains a heading", () => {
    const groups = Array.from(doc.querySelectorAll("section, article"));
    const hasHeadingInGroup = groups.some((g) =>
      g.querySelector("h1, h2, h3, h4, h5, h6"),
    );
    expect(hasHeadingInGroup).toBe(true);
  });
});
