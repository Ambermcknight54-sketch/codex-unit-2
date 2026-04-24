import { describe, it, expect, beforeEach } from "vitest";
import { loadDocument } from "./_test-utils";

describe("Level 01 — Boilerplate & Document Structure", () => {
  let doc: any = null;

  beforeEach(() => {
    doc = loadDocument(1, "lesson-01-semantic-tags");
  });

  it("includes a doctype declaration", () => {
    const hasDoctype =
      !!doc?.doctype ||
      /<!doctype html>/i.test(doc?.documentElement.outerHTML ?? "");
    expect(hasDoctype).toBe(true);
  });

  it("contains an <html> element", () => {
    const htmlEl = doc?.querySelector("html");
    expect(htmlEl).toBeTruthy();
  });

  it("contains a <head> element", () => {
    const head = doc?.querySelector("head");
    expect(head).toBeTruthy();
  });

  it("contains a <title> element with non-empty, non-placeholder text", () => {
    const title = doc?.querySelector("title");
    expect(title).toBeTruthy();
    const titleText = title?.textContent?.trim() ?? "";
    expect(titleText.length).toBeGreaterThan(0);
    expect(/todo/i.test(titleText)).toBe(false);
  });

  it("includes a viewport meta tag for responsive layouts", () => {
    const meta = doc?.querySelector('meta[name="viewport"]');
    expect(meta).toBeTruthy();
    const content = meta?.getAttribute("content") ?? "";
    expect(/width\s*=\s*device-width/i.test(content)).toBe(true);
  });

  it("contains a <body> element", () => {
    const body = doc?.querySelector("body");
    expect(body).toBeTruthy();
  });

  it("contains exactly one top-level <h1> heading", () => {
    const h1s = doc?.querySelectorAll("h1") ?? [];
    expect(h1s.length).toBe(1);
  });
});
