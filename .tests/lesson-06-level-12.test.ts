import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-12-debug-functions/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-12-debug-functions",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-12 debug functions", () => {
  it("contains at least 5 valid function declarations", () => {
    const decls = src.match(/function\s+\w+\s*\(/g) || [];
    expect(decls.length).toBeGreaterThanOrEqual(5);
  });

  it("contains at least 5 valid corresponding function calls", () => {
    const calls = src.match(/\w+\s*\(/g) || [];
    expect(calls.length).toBeGreaterThanOrEqual(5);
  });

  it("exports one repaired function as the default export", () => {
    expect(def).not.toBeUndefined();
  });

  it("(the default exported value) is callable (function)", () => {
    expect(typeof def).toBe("function");
  });
});
