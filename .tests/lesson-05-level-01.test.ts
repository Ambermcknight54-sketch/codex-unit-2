import { describe, it, expect } from "vitest";
import answer from "../../lesson-05-terminal-commands/level-01/answer.js";

describe("lesson-05 — level-01 select Git Bash", () => {
  it("exports a string", () => {
    expect(typeof answer).toBe("string");
  });

  it("mentions Git Bash (case-insensitive)", () => {
    expect(/git\s*bash|gitbash|git/i.test(String(answer))).toBeTruthy();
  });
});
