import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-11-function-calls/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-11-function-calls",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-11 function calls", () => {
  it("calls reportScore 10 times", () => {
    const matches = src.match(/reportScore\s*\(/g) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("saves return values into descriptive camelCase const variables", () => {
    const assignMatches =
      src.match(/const\s+[a-z][A-Za-z0-9]*\s*=\s*reportScore\s*\(/g) || [];
    expect(assignMatches.length).toBeGreaterThanOrEqual(10);
  });

  it("exports one saved report value as the default export", () => {
    expect(def).not.toBeUndefined();
  });

  it("(the default exported report value) is a primitive or object", () => {
    expect(["string", "number", "boolean", "object"]).toContain(typeof def);
  });
});
