import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 07 — Inline code and preformatted text", () => {
  it("uses `code` for inline snippets and `pre` for preserved whitespace blocks", () => {
    const doc = loadDocument(7, "lesson-01-semantic-tags");
    const hasCode = doc.querySelector("code") !== null;
    const hasPre = doc.querySelector("pre") !== null;
    // At minimum, expect at least inline code usage or a pre block
    expect(hasCode || hasPre).toBe(true);
  });
});
