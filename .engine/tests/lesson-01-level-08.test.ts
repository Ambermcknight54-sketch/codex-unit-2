import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 08 — Details & Summary", () => {
  it("uses details with a summary element when present", () => {
    const doc = loadDocument(8, "lesson-01-semantic-tags");
    const details = Array.from(doc.querySelectorAll("details"));
    // Require students to add a details element with a summary for this level
    expect(details.length).toBeGreaterThanOrEqual(1);
    const allHaveSummary = details.every(
      (d) => d.querySelector("summary") !== null,
    );
    expect(allHaveSummary).toBe(true);
  });
});
