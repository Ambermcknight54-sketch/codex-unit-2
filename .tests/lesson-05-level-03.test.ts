import { describe, it, expect } from "vitest";
import answer from "../lesson-05-terminal-commands/level-03/answer.js";
import { expectNonEmptyString } from "./_test-utils";

describe("lesson-05 — level-03 cd", () => {
  it("exports a short string mentioning cd or movement", () => {
    expectNonEmptyString(answer);
    expect(/\bcd\b|cd\s|cd\.|back|parent/i.test(String(answer))).toBeTruthy();
  });
});
