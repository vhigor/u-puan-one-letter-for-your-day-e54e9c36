import { mkdirSync, writeFileSync } from "node:fs";

// One letter for the day: "G" — for "Gas", the word that describes
// the day. Fixed text, no network, no randomness, no time dependence —
// every run writes byte-identical output.
const letter = "G";

// Validate the gate before writing: exactly 1 Unicode code point, not only whitespace.
const points = [...letter].length;
if (points !== 1 || letter.trim() === "") {
  console.error(`entry.txt must be exactly 1 character, got ${points}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
