import { describe, it, expect } from "vitest";
import added from "../lesson-04-js-objects/level-06/add.js";

describe("lesson-04 — level-06 add properties", () => {
  it("exports a defined object", () => {
    expect(added).toBeDefined();
    expect(typeof added).toBe("object");
  });

  it("has at least one own property", () => {
    const keys = Object.keys(added || {});
    expect(keys.length).toBeGreaterThan(0);
  });
});
