import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-04-booleans-variables/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-04-booleans-variables",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-04 booleans", () => {
  it("declares at least 10 boolean variables", () => {
    const matches = src.match(/let\s+\w+\s*=\s*(true|false)/gi) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("(boolean variable names) uses question-style prefixes (is|has|can|should)", () => {
    const prefMatches =
      src.match(
        /let\s+(is|has|can|should)[A-Za-z0-9_]*\s*=\s*(true|false)/gi,
      ) || [];
    expect(prefMatches.length).toBeGreaterThanOrEqual(10);
  });
  it("exports one variable as the default export", () => {
    expect(def).not.toBeUndefined();
  });

  it("(the default exported value) is boolean (true/false)", () => {
    expect(typeof def).toBe("boolean");
  });
});
