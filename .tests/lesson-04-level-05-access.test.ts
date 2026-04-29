import { describe, it, expect } from "vitest";
import access from "../lesson-04-js-objects/level-05/access.js";

describe("lesson-04 — level-05 access", () => {
  it("exports a defined value", () => {
    expect(access).toBeDefined();
  });

  it("exports a primitive (string or number)", () => {
    expect(
      typeof access === "string" || typeof access === "number",
    ).toBeTruthy();
  });
});
