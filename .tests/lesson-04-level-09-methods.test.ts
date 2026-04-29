import { describe, it, expect } from "vitest";
import studentObj from "../lesson-04-js-objects/level-09/object.js";

describe("lesson-04 — level-09 methods assigned after declaration", () => {
  it("exports an object", () => {
    expect(studentObj).toBeDefined();
    expect(typeof studentObj).toBe("object");
  });

  it("has a greet method function", () => {
    const fn = studentObj.greet;
    expect(typeof fn).toBe("function");
  });

  it("greet is a named function", () => {
    const fn = studentObj.greet;
    expect(fn.name && fn.name.length).toBeGreaterThan(0);
  });
});
