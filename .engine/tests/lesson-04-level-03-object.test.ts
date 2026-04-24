import { describe, it } from "vitest";
import obj from "../../lesson-04-js-objects/level-03/object.js";

describe("lesson-04 — level-03 object export", () => {
  it("exports an object as default", () => {
    if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      throw new Error(
        'Helpful Hint: Level 03 should default-export an object (e.g., const user = { name: "Ava" }; export default user;)',
      );
    }
  });
});
