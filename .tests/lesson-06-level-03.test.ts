import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-03-practice-variables/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-03-practice-variables",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-03 practice variables", () => {
  it("contains at least 5 assignment lines (not declarations)", () => {
    const assignMatches = src.match(/^\s*\w+\s*=\s*.+$/gm) || [];
    // Filter out lines that start with 'let' (declarations)
    const nonDecl = assignMatches.filter((l) => !/^\s*let\s+/.test(l));
    expect(nonDecl.length).toBeGreaterThanOrEqual(5);
  });

  it("contains repaired string literals (5+)", () => {
    const strMatches = src.match(/(['"`]).+?\1/g) || [];
    expect(strMatches.length).toBeGreaterThanOrEqual(5);
  });

  it("exports one assigned or repaired variable as the default export", () => {
    expect(def).not.toBeUndefined();
  });

  it("(the default exported value) is a string or number", () => {
    expect(["string", "number"]).toContain(typeof def);
  });
});
