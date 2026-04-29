import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 10 — Build a Semantic Page (Integration)", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(10, "lesson-01-semantic-tags");
  });

  it("includes header, nav, main, and footer landmarks", () => {
    const header = doc.querySelector("header");
    const nav = doc.querySelector("nav");
    const main = doc.querySelector("main");
    const footer = doc.querySelector("footer");
    expect(header).toBeTruthy();
    expect(nav).toBeTruthy();
    expect(main).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it("contains exactly one top-level h1", () => {
    const h1s = doc.querySelectorAll("h1");
    expect(h1s.length).toBe(1);
  });

  it("has at least one section or article with a list", () => {
    const sectionWithList = Array.from(
      doc.querySelectorAll("section, article"),
    ).some((g) => g.querySelector("ul, ol"));
    expect(sectionWithList).toBe(true);
  });

  it("ensures images include alt attributes", () => {
    const imgs = Array.from(doc.querySelectorAll("img"));
    const allImgsHaveAlt = imgs.every((i) => i.hasAttribute("alt"));
    expect(allImgsHaveAlt).toBe(true);
  });
});
