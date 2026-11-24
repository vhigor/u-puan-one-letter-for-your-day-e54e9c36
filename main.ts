import { mkdirSync, writeFileSync } from "node:fs";

// One letter for the day: "G" — for "Gas", the word that describes
// the day. Fixed text, no network, no randomness, no time dependence —
// every run writes byte-identical output.
const letter = "G";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
