import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-10-declare-functions/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-10-declare-functions",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-10 declare functions", () => {
  it("declares at least 10 named functions that accept no parameters", () => {
    const funcDeclRegex = /function\s+\w+\s*\(\s*\)\s*\{/g;
    const matches = src.match(funcDeclRegex) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("(those functions) returns a string", () => {
    const funcReturnRegex =
      /function\s+\w+\s*\(\s*\)\s*\{[\s\S]*?return\s+["'`].+?["'`][\s\S]*?\}/g;
    const matches = src.match(funcReturnRegex) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("exports one function as the default export", () => {
    expect(typeof def).toBe("function");
  });

  it("(the default exported function) returns a string when called", () => {
    const result = def();
    expect(typeof result).toBe("string");
  });
});
