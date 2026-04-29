import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import def from "../lesson-06-js-syntax/level-08-object-access/script.js";

const file = path.join(
  process.cwd(),
  "lesson-06-js-syntax",
  "level-08-object-access",
  "script.js",
);
const src = fs.readFileSync(file, "utf8");

describe("lesson-06 — level-08 object access", () => {
  it("accesses at least 10 properties using dot notation", () => {
    const matches = src.match(/\w+\s*=\s*\w+(?:\.\w+){1,}/g) || [];
    expect(matches.length).toBeGreaterThanOrEqual(10);
  });

  it("exports one accessed value as the default export", () => {
    expect(def).not.toBeUndefined();
  });

  it("(the default exported value) is a string, number, or boolean", () => {
    expect(["string", "number", "boolean"]).toContain(typeof def);
  });
});
