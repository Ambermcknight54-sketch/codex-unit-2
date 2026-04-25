import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import path from "path";

describe("Level 01 — Intro & Boilerplate", () => {
  let doc: Document | null = null;

  beforeEach(() => {
    const file = path.join(
      process.cwd(),
      "lesson-02-forms",
      "level-01",
      "index.html",
    );
    const html = readFileSync(file, "utf-8");
    doc = new JSDOM(html).window.document;
  });

  it("loads the page DOM", () => {
    expect(doc).toBeTruthy();
  });

  it("contains a form element", () => {
    expect(doc!.querySelector("form")).toBeTruthy();
  });

  it("form contains at least one input", () => {
    const form = doc!.querySelector("form");
    expect(form).toBeTruthy();
    expect(form!.querySelector("input")).toBeTruthy();
  });

  it("contains a submit control", () => {
    expect(
      doc!.querySelector('button[type="submit"], input[type="submit"], button'),
    ).toBeTruthy();
  });

  it("input has an associated label (optional but recommended)", () => {
    const input = doc!.querySelector("input");
    expect(input).toBeTruthy();
    const id = input!.getAttribute("id");
    const hasLabel =
      (id && doc!.querySelector(`label[for="${id}"]`)) ||
      input!.closest("label");
    expect(hasLabel).toBeTruthy();
  });

  it("submit control has accessible name (optional)", () => {
    const submit = doc!.querySelector(
      'button[type="submit"], input[type="submit"], button',
    );
    expect(submit).toBeTruthy();
    const name =
      (submit!.textContent && submit!.textContent.trim()) ||
      (submit!.getAttribute && submit!.getAttribute("aria-label")) ||
      (submit!.getAttribute && submit!.getAttribute("value"));
    expect(name).toBeTruthy();
  });
});
