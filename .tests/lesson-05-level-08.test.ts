import { describe, it, expect } from "vitest";
import answer from "../lesson-05-terminal-commands/level-08/answer.js";

describe("lesson-05 — level-08 clear terminal", () => {
  it("exports a string mentioning clear or ctrl+l", () => {
    expect(typeof answer).toBe("string");
    expect(/\bclear\b|ctrl\+l|control\+l/i.test(String(answer))).toBeTruthy();
  });
});
