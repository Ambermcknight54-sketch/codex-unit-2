import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-14-debugging-loops",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-14 debugging loops", () => {
  it("contains at least 10 fixed loop snippets (for or while)", () => {
    const forMatches = src.match(/for\s*\(/g) || [];
    expect(forMatches.length).toBeGreaterThanOrEqual(10);
  });
});
