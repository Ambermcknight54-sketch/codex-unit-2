import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-05-declare-arrays/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-05-declare-arrays",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-05 declare arrays", () => {
  it("declares at least 10 arrays initialized on one line", () => {
    const arrRegex = /let\s+\w+\s*=\s*\[[^\]]+\]/g;
    const matches = src.match(arrRegex) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("(array declarations) use plural camelCase names (end with 's')", () => {
    const pluralRegex = /let\s+\w+s\s*=\s*\[[^\]]+\]/g;
    const matches = src.match(pluralRegex) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("(plural-named arrays) have at least 3 items", () => {
    const arrRegex = /let\s+\w+s\s*=\s*\[[^\]]+\]/g;
    const matches = src.match(arrRegex) || [];
    const invalid = matches.filter((m) => (m.match(/,/g) || []).length < 2);
    expect(invalid.length).toBe(0);
  });

  it("exports one array as the default export", () => {
    expect(Array.isArray(def)).toBeTruthy();
  });

  it("(the default exported array) has at least 3 items", () => {
    expect(Array.isArray(def)).toBeTruthy();
    expect(def.length).toBeGreaterThanOrEqual(3);
  });
});
