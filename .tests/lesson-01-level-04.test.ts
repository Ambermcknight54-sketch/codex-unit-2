import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 04 — Lists", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(4, "lesson-01-semantic-tags");
  });

  it("includes at least one ul or ol element", () => {
    const lists = Array.from(doc.querySelectorAll("ul, ol"));
    expect(lists.length).toBeGreaterThanOrEqual(1);
  });

  it("has at least one list with <li> children", () => {
    const lists = Array.from(doc.querySelectorAll("ul, ol"));
    const hasListWithItems = lists.some(
      (l) => l.querySelectorAll("li").length > 0,
    );
    expect(hasListWithItems).toBe(true);
  });
});
