import { describe, it, expect } from "vitest";
import answer from "../lesson-05-terminal-commands/level-10/answer.js";
import { expectArray, expectArrayIncludesToken } from "./_test-utils";

describe("lesson-05 — level-10 challenge steps array", () => {
  it("exports an array of steps", () => {
    expectArray(answer);
  });

  it("includes a node run step (e.g., 'node ./folder/script.js')", () => {
    expectArrayIncludesToken(answer, /\bnode\b/i);
  });

  it("includes a terminal clear step (e.g., 'clear' or 'ctrl+l')", () => {
    expectArrayIncludesToken(answer, /\bclear\b|ctrl\+l|control\+l/i);
  });

  it("includes a step that returns to the original folder (e.g., 'cd ..' or 'cd -')", () => {
    expectArrayIncludesToken(answer, /(\bcd\s+(\.|\.|-|back))|\bcd\s+\.\./i);
  });

  it("includes a VS Code explorer step mentioning 'added file'", () => {
    expectArrayIncludesToken(answer, /added file/i);
  });

  it("includes a VS Code explorer step mentioning 'created folder'", () => {
    expectArrayIncludesToken(answer, /created folder/i);
  });

  it("includes a VS Code explorer step mentioning 'moved file'", () => {
    expectArrayIncludesToken(answer, /moved file|moved/i);
  });
});
