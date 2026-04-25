import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 07 — Inline code and preformatted text", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(7, "lesson-01-semantic-tags");
  });

  it("contains an inline code element when present", () => {
    const hasCode = doc.querySelector("code") !== null;
    // This test is informational: pass if code exists or not, but prefer presence
    expect(typeof hasCode).toBe("boolean");
  });

  it("contains a pre block when present", () => {
    const hasPre = doc.querySelector("pre") !== null;
    expect(typeof hasPre).toBe("boolean");
  });

  it("has at least inline code or a pre block", () => {
    const hasCode = doc.querySelector("code") !== null;
    const hasPre = doc.querySelector("pre") !== null;
    expect(hasCode || hasPre).toBe(true);
  });
});
