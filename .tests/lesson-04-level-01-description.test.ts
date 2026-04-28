import { describe, it, expect } from "vitest";
import student from "../lesson-04-js-objects/level-01/description.js";

describe("lesson-04 — level-01 description", () => {
  it("exports a string", () => {
    expect(typeof student).toBe("string");
  });

  it("string is non-empty", () => {
    expect(student.trim().length).toBeGreaterThan(0);
  });
});
