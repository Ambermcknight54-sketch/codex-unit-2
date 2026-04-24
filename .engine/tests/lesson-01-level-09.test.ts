import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 09 — From div to Semantic Elements", () => {
  it("prefers semantic landmarks over a single top-level layout div", () => {
    const doc = loadDocument(9, "lesson-01-semantic-tags");
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
    // Require at least two semantic elements at top-level to avoid single-wrapper div layouts
    expect(present.length).toBeGreaterThanOrEqual(2);
  });
});
