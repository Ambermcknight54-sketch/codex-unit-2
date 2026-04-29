import { describe, it, expect } from "vitest";
import answer from "../lesson-05-terminal-commands/level-07/answer.js";

describe("lesson-05 — level-07 navigation shortcuts", () => {
  it("exports a string mentioning a navigation or shortcut hint", () => {
    expect(typeof answer).toBe("string");
    expect(
      /up|down|ctrl\+r|history|reverse-search/i.test(String(answer)),
    ).toBeTruthy();
  });
});
