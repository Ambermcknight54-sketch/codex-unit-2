import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 06 — Images & Alt Text", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(6, "lesson-01-semantic-tags");
  });

  it("includes at least one image", () => {
    const imgs = Array.from(doc.querySelectorAll("img"));
    expect(imgs.length).toBeGreaterThanOrEqual(1);
  });

  it("all images include an alt attribute (may be empty for decorative)", () => {
    const imgs = Array.from(doc.querySelectorAll("img"));
    const allHaveAlt = imgs.every((img) => img.hasAttribute("alt"));
    expect(allHaveAlt).toBe(true);
  });

  it("example images (if present) have meaningful alt text", () => {
    const imgs = Array.from(doc.querySelectorAll("img"));
    const exampleImgs = imgs.filter((i) =>
      (i.getAttribute("src") || "").includes("example"),
    );
    if (exampleImgs.length === 0) {
      expect(true).toBe(true);
      return;
    }
    const ok = exampleImgs.every((i) => {
      const alt = i.getAttribute("alt") || "";
      return alt.trim().length > 0 && !/todo/i.test(alt);
    });
    expect(ok).toBe(true);
  });
});
