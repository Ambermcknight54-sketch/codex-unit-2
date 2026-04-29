import { describe, it, expect } from "vitest";
import challenge from "../lesson-04-js-objects/level-11/object.js";

describe("lesson-04 — level-11 challenge", () => {
  it("exports an object", () => {
    expect(challenge).toBeDefined();
    expect(typeof challenge).toBe("object");
  });

  it("includes title and author strings", () => {
    expect(typeof challenge.title).toBe("string");
    expect(typeof challenge.author).toBe("string");
  });

  it("includes pages as a number", () => {
    expect(typeof challenge.pages).toBe("number");
  });

  it("includes a summary method (named)", () => {
    expect(typeof challenge.summary).toBe("function");
    expect(
      challenge.summary.name && challenge.summary.name.length,
    ).toBeGreaterThan(0);
  });
});
