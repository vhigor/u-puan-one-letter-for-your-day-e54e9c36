import { mkdirSync, writeFileSync } from "node:fs";

// One letter for the day: "G" — for "Gas", the word that describes
// the day. Fixed text, no network, no randomness, no time dependence —
// every run writes byte-identical output.
const letter = "G";

// Validate the gate before writing: exactly 1 Unicode code point, not only
// whitespace, and a single letter A-Z (the bounty takes one letter, A to Z).
const points = [...letter].length;
if (points !== 1 || letter.trim() === "" || !/^[A-Z]$/.test(letter)) {
  console.error(`entry.txt must be exactly 1 letter A-Z, got ${points} code point(s): ${JSON.stringify(letter)}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
