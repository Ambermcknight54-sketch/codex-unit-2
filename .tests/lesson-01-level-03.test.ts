import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 03 — Landmark Elements", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(3, "lesson-01-semantic-tags");
  });

  it("contains a header landmark", () => {
    const header = doc.querySelector("header");
    expect(header).toBeTruthy();
  });

  it("contains a nav landmark", () => {
    const nav = doc.querySelector("nav");
    expect(nav).toBeTruthy();
  });

  it("contains a main landmark", () => {
    const main = doc.querySelector("main");
    expect(main).toBeTruthy();
  });

  it("contains a footer landmark", () => {
    const footer = doc.querySelector("footer");
    expect(footer).toBeTruthy();
  });
});
