import { describe, it, expect } from "vitest";
import answer from "../lesson-05-terminal-commands/level-09/answer.js";
import { expectArray, expectArrayIncludesToken } from "./_test-utils";

describe("lesson-05 — level-09 multi-step steps array", () => {
  it("exports an array of steps (strings)", () => {
    expectArray(answer);
  });

  it("includes 'ls' at least once (case-insensitive)", () => {
    expectArrayIncludesToken(answer, /\bls\b/i);
  });

  it("includes 'cd' at least once (case-insensitive)", () => {
    expectArrayIncludesToken(answer, /\bcd\b/i);
  });

  it("includes 'node' at least once (case-insensitive)", () => {
    expectArrayIncludesToken(answer, /\bnode\b/i);
  });
});
