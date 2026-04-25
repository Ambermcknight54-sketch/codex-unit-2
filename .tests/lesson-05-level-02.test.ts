import { describe, it, expect, beforeEach } from "vitest";
import answer from "../../lesson-05-terminal-commands/level-02/answer.js";

describe("lesson-05 — level-02 ls", () => {
  it("exports a non-empty string", () => {
    expect(typeof answer).toBe("string");
    expect(String(answer).trim().length).toBeGreaterThan(0);
  });
});
