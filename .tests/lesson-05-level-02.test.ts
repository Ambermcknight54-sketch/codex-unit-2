import { describe, it } from "vitest";
import answer from "../lesson-05-terminal-commands/level-02/answer.js";
import { expectNonEmptyString, expectStringIncludesToken } from "./_test-utils";

describe("lesson-05 — level-02 ls", () => {
  it("exports a string mentioning 'ls'", () => {
    expectNonEmptyString(answer);
    expectStringIncludesToken(answer, /\bls\b/i);
  });
});
