import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-06-debug-arrays/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-06-debug-arrays",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-06 debug arrays", () => {
  it("contains at least 10 array literals (declared and initialized on one line)", () => {
    const matches = src.match(/let\s+\w+\s*=\s*\[[^\]]+\]/g) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });
  it("exports one repaired array as the default export", () => {
    expect(Array.isArray(def)).toBeTruthy();
  });

  it("(the default exported array) has at least 3 items", () => {
    expect(Array.isArray(def)).toBeTruthy();
    expect(def.length).toBeGreaterThanOrEqual(3);
  });
});
