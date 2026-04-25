import { describe, it, expect } from "vitest";
import nested from "../../lesson-04-js-objects/level-08/nested.js";

describe("lesson-04 — level-08 nested properties", () => {
  it("exports an object", () => {
    expect(nested).toBeDefined();
    expect(typeof nested).toBe("object");
  });

  it("includes theme.color", () => {
    expect(nested.theme).toBeDefined();
    expect(typeof nested.theme.color).not.toBe("undefined");
  });
});
