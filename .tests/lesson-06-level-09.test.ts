import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-09-debug-objects/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-09-debug-objects",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-09 debug objects", () => {
  it("contains at least 10 single-depth object literals (declared and initialized on one line)", () => {
    const objRegex = /let\s+\w+\s*=\s*\{[^}]+\}/g;
    const matches = src.match(objRegex) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("(each declared object literal) has at least 3 properties", () => {
    const objRegex = /let\s+\w+\s*=\s*\{[^}]+\}/g;
    const matches = src.match(objRegex) || [];
    const invalid = matches.filter((m) => (m.match(/:\s*/g) || []).length < 3);
    expect(invalid.length).toBe(0);
  });
  it("exports one repaired object as the default export", () => {
    expect(def).not.toBeNull();
    expect(typeof def).toBe("object");
    expect(Array.isArray(def)).toBeFalsy();
  });

  it("(the default exported object) has at least 3 properties", () => {
    const keys = Object.keys(def || {});
    expect(keys.length).toBeGreaterThanOrEqual(3);
  });
});
