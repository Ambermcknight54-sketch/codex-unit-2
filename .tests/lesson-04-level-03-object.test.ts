import { describe, it, expect } from "vitest";
import obj from "../lesson-04-js-objects/level-03/object.js";

describe("lesson-04 — level-03 object export", () => {
  it("exports a non-array object", () => {
    expect(obj).toBeDefined();
    expect(typeof obj).toBe("object");
    expect(Array.isArray(obj)).toBeFalsy();
  });
});
