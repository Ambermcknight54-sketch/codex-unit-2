import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 06 — Images & Alt Text", () => {
  it("all images include an alt attribute (may be empty for decorative)", () => {
    const doc = loadDocument(6, "lesson-01-semantic-tags");
    const imgs = Array.from(doc.querySelectorAll("img"));
    // Expect students to have an example image to work with
    expect(imgs.length).toBeGreaterThanOrEqual(1);

    const allHaveAlt = imgs.every((img) => img.hasAttribute("alt"));
    expect(allHaveAlt).toBe(true);

    // If the lesson includes the provided example image, ensure its alt text is meaningful
    const exampleImgs = imgs.filter((i) =>
      (i.getAttribute("src") || "").includes("example"),
    );
    if (exampleImgs.length > 0) {
      const ok = exampleImgs.every((i) => {
        const alt = i.getAttribute("alt") || "";
        return alt.trim().length > 0 && !/todo/i.test(alt);
      });
      expect(ok).toBe(true);
    }
  });
});
