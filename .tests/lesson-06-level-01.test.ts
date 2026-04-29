import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-01-declare-variables/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-01-declare-variables",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-01 declare variables", () => {
  it("contains at least 10 'let' declarations (one per line)", () => {
    const matches = src.match(/^\s*let\s+\w+/gm) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("declares a camelCase variable", () => {
    expect(/let\s+[a-z]+[A-Za-z0-9]*[A-Z][A-Za-z0-9]*/.test(src)).toBeTruthy();
  });

  it("exports the default uninitialized variable (undefined)", () => {
    expect(def).toBeUndefined();
  });
});
