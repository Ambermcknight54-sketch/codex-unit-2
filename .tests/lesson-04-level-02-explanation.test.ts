import { describe, it, expect } from "vitest";
import explanation from "../lesson-04-js-objects/level-02/explanation.js";
import { expectNonEmptyString } from "./_test-utils";

describe("lesson-04 — level-02 explanation", () => {
  it("exports a non-empty string", () => {
    expectNonEmptyString(explanation);
  });

  it("mentions 'key' and 'value'", () => {
    expect(/key/.test(explanation)).toBeTruthy();
    expect(/value/.test(explanation)).toBeTruthy();
  });
});
