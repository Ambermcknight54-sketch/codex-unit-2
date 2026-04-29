import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 08 — Details & Summary", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(8, "lesson-01-semantic-tags");
  });

  it("includes at least one details element", () => {
    const details = Array.from(doc.querySelectorAll("details"));
    expect(details.length).toBeGreaterThanOrEqual(1);
  });

  it("ensures each details element includes a summary", () => {
    const details = Array.from(doc.querySelectorAll("details"));
    const allHaveSummary = details.every(
      (d) => d.querySelector("summary") !== null,
    );
    expect(allHaveSummary).toBe(true);
  });
});
