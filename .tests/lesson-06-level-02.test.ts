import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-02-initialize-variables/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-02-initialize-variables",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-02 initialize variables", () => {
  it("has at least 5 string initializations", () => {
    const strMatches = src.match(/let\s+\w+\s*=\s*["'`].+?["'`]/g) || [];
    expect(strMatches.length).toBeGreaterThanOrEqual(5);
  });

  it("has at least 5 numeric initializations", () => {
    const numMatches = src.match(/let\s+\w+\s*=\s*[0-9]+/g) || [];
    expect(numMatches.length).toBeGreaterThanOrEqual(5);
  });

  it("exports one declared variable as the default export (string or number)", () => {
    expect(def).not.toBeUndefined();
    expect(["string", "number"]).toContain(typeof def);
  });
});
