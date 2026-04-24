import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 04 — Lists", () => {
  it("uses ul or ol with li children for list content", () => {
    const doc = loadDocument(4, "lesson-01-semantic-tags");
    const lists = Array.from(doc.querySelectorAll("ul, ol"));
    expect(lists.length).toBeGreaterThanOrEqual(1);
    const hasListWithItems = lists.some(
      (l) => l.querySelectorAll("li").length > 0,
    );
    expect(hasListWithItems).toBe(true);
  });
});
