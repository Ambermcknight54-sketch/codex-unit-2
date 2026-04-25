import { describe, it, expect } from "vitest";
import answer from "../../lesson-05-terminal-commands/level-04/answer.js";

describe("lesson-05 — level-04 current directory ./", () => {
  it("exports a string that mentions '.' or './'", () => {
    expect(typeof answer).toBe("string");
    expect(/\.|\.\//.test(String(answer))).toBeTruthy();
  });
});
