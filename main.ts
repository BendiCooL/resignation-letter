// The Funniest One-Line Resignation Letter — make.fun entry.
// One line, 97 Unicode code points, in the voice of a cron job that has had enough.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I have fired every minute since March and nobody has checked whether I still do anything. I quit.";

// The sealed gate accepts 1–140 characters of non-blank UTF-8 text.
// Fail loudly instead of writing an entry the gate would reject.
const length = [...ENTRY].length;
if (length < 1 || length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${length} code points, must be 1–140`);
}

// The grader mounts /output; never delete the directory itself, only write into it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
