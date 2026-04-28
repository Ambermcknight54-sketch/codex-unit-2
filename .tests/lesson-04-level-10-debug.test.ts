import { describe, it, expect } from "vitest";
import fixes from "../lesson-04-js-objects/level-10/fixes.js";

describe("lesson-04 — level-10 debugging fixes", () => {
  it("exports an object", () => {
    expect(fixes).toBeDefined();
    expect(typeof fixes).toBe("object");
  });

  it("has a say method that's a function", () => {
    const fn = fixes.say;
    expect(typeof fn).toBe("function");
  });

  it("say is a named function 'say'", () => {
    const fn = fixes.say;
    expect(fn.name).toBe("say");
  });

  it("say returns a greeting string", () => {
    const result = fixes.say();
    expect(typeof result).toBe("string");
    expect(/hello/i.test(result)).toBeTruthy();
  });
});
