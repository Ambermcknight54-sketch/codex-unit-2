import { describe, it, expect } from "vitest";
import answer from "../../lesson-05-terminal-commands/level-10/answer.js";

describe("lesson-05 — level-10 challenge object", () => {
  it("exports an object with steps array", () => {
    expect(typeof answer).toBe("object");
    expect(Array.isArray(answer.steps)).toBeTruthy();
  });

  it("steps include node and notes mention VS Code", () => {
    const steps = answer.steps.map(String);
    const hasNode = steps.some((s) => /\bnode\b/i.test(s));
    expect(hasNode).toBeTruthy();
    const notes = String(answer.notes || "").toLowerCase();
    expect(/vscode|vs code|visual studio code/i.test(notes)).toBeTruthy();
  });
});
