import { describe, it, expect } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 10 — Build a Semantic Page (Integration)", () => {
  it("includes landmarks, a single h1, sections with lists, and images with alt text", () => {
    const doc = loadDocument(10, "lesson-01-semantic-tags");
    const header = doc.querySelector("header");
    const nav = doc.querySelector("nav");
    const main = doc.querySelector("main");
    const footer = doc.querySelector("footer");
    expect(header).toBeTruthy();
    expect(nav).toBeTruthy();
    expect(main).toBeTruthy();
    expect(footer).toBeTruthy();

    const h1s = doc.querySelectorAll("h1");
    expect(h1s.length).toBe(1);

    const sectionWithList = Array.from(
      doc.querySelectorAll("section, article"),
    ).some((g) => g.querySelector("ul, ol"));
    expect(sectionWithList).toBe(true);

    const imgs = Array.from(doc.querySelectorAll("img"));
    const allImgsHaveAlt = imgs.every((i) => i.hasAttribute("alt"));
    expect(allImgsHaveAlt).toBe(true);
  });
});
