import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-13-for-loops",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-13 for loops", () => {
  it("contains at least 10 distinct for-loops", () => {
    const matches = src.match(/for\s*\(\s*let\s+\w+\s*;[^)]*\)/g) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("logs each iterated number using console.log in each for loop", () => {
    const matches =
      src.match(/for\s*\([^)]*\)\s*\{[\s\S]*?console\.log\s*\(/g) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("uses 10 distinct start/end ranges across the for loops", () => {
    const loopRegex = /for\s*\(\s*([^)]+)\)/g;
    const ranges: string[] = [];
    let m: RegExpExecArray | null;
    // collect the parenthesis contents for each for-loop
    while ((m = loopRegex.exec(src)) !== null) {
      ranges.push(m[1].trim());
    }
    const unique = [...new Set(ranges)];
    expect(unique.length).toBeGreaterThanOrEqual(10);
  });
});
