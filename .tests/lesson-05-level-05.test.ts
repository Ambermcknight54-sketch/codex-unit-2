import { describe, it, expect } from "vitest";
import answer from "../../lesson-05-terminal-commands/level-05/answer.js";

describe("lesson-05 — level-05 parent directory ..", () => {
  it("exports a string mentioning '..' or 'parent'", () => {
    expect(typeof answer).toBe("string");
    expect(/\.\.|parent/i.test(String(answer))).toBeTruthy();
  });
});
