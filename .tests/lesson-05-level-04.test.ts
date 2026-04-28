import { describe, it, expect } from "vitest";
import answer from "../lesson-05-terminal-commands/level-04/answer.js";
import { expectNonEmptyString } from "./_test-utils";

describe("lesson-05 — level-04 current directory ./", () => {
  it("exports a string that mentions '.' or './'", () => {
    expectNonEmptyString(answer);
    expect(/\.|\.\//.test(String(answer))).toBeTruthy();
  });
});
