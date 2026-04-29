import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 09 — From div to Semantic Elements", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(9, "lesson-01-semantic-tags");
  });

  it("lists top-level body children tags", () => {
    const bodyChildren = Array.from(doc.body.children).map((n) =>
      n.tagName.toLowerCase(),
    );
    expect(Array.isArray(bodyChildren)).toBe(true);
  });

  it("includes multiple semantic elements at top-level (avoid single wrapper div)", () => {
    const bodyChildren = Array.from(doc.body.children).map((n) =>
      n.tagName.toLowerCase(),
    );
    const semanticSet = new Set([
      "header",
      "main",
      "nav",
      "footer",
      "section",
      "article",
    ]);
    const present = bodyChildren.filter((t) => semanticSet.has(t));
    expect(present.length).toBeGreaterThanOrEqual(2);
  });
});
