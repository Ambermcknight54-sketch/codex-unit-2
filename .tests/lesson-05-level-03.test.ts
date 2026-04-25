import { describe, it, expect } from "vitest";
import answer from "../../lesson-05-terminal-commands/level-03/answer.js";

describe("lesson-05 — level-03 cd", () => {
  it("exports a short string mentioning cd or movement", () => {
    expect(typeof answer).toBe("string");
    expect(/\bcd\b|cd\s|cd\.|back|parent/i.test(String(answer))).toBeTruthy();
  });
});
