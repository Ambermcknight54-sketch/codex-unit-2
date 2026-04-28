import fs from "node:fs";
import path from "node:path";
import { JSDOM } from "jsdom";
import { expect } from "vitest";

type LessonSlug = `lesson-${number}-${string}`;

export function lessonRoot(lessonSlug: LessonSlug) {
  return path.resolve(process.cwd(), lessonSlug);
}

function findLevelDir(lessonDir: string, levelPrefix: string) {
  if (!fs.existsSync(lessonDir)) return null;
  const entries = fs.readdirSync(lessonDir, { withFileTypes: true });
  const found = entries.find(
    (e) => e.isDirectory() && e.name.startsWith(levelPrefix),
  );
  return found ? path.join(lessonDir, found.name) : null;
}

export function indexHtmlPathForLevel(
  levelNumber: number,
  lessonSlug: LessonSlug,
) {
  const prefix = `level-${String(levelNumber).padStart(2, "0")}`;
  const root = lessonRoot(lessonSlug);
  const levelDir = findLevelDir(root, prefix);
  if (!levelDir)
    throw new Error(
      `Could not find directory starting with ${prefix} in ${root}`,
    );
  const target = path.join(levelDir, "index.html");
  if (!fs.existsSync(target))
    throw new Error(`Missing index.html at ${target}`);
  return target;
}

export function loadDocument(levelNumber: number, lessonSlug: LessonSlug) {
  const file = indexHtmlPathForLevel(levelNumber, lessonSlug);
  const html = fs.readFileSync(file, "utf8");
  const dom = new JSDOM(html);
  return dom.window.document;
}

// Reusable test helpers
export function expectNonEmptyString(value: unknown) {
  expect(typeof value).toBe("string");
  expect(String(value).trim().length).toBeGreaterThan(0);
}

export function expectArray(value: unknown) {
  expect(Array.isArray(value)).toBeTruthy();
}

export function expectArrayIncludesToken(value: unknown, token: RegExp) {
  expect(Array.isArray(value)).toBeTruthy();
  const arr = (value as any[]).map(String);
  expect(arr.some((s) => token.test(s))).toBeTruthy();
}

export function expectStringIncludesToken(value: unknown, token: RegExp) {
  expect(typeof value).toBe("string");
  expect(token.test(String(value))).toBeTruthy();
}
