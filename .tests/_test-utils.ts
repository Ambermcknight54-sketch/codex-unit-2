import fs from "node:fs";
import path from "node:path";
import { JSDOM } from "jsdom";

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
