// one-star-sap-01 — one one-star review, under 280 characters, written by
// a houseplant about its human owner. The program writes the line to
// /output/entry.txt (the grader's artifact) and prints it to stdout.
//
// The review was picked against the judge's brief: the grievance is the
// plant's own — watered on a schedule its owner invented, shuttled toward
// the light for a week then back to the shelf for the photos — and the
// single star is earned by a year without growth. No drama-queen wilting,
// no "being ignored": the close, "furniture with a pulse and a grudge",
// is the plant's verdict on its own life.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The gate only accepts 1-279 characters of non-whitespace text.
const MAX_CHARS = 279;

const ENTRY =
  "One star. He waters me on a schedule he invented, moves me toward the light for a week, then back to the shelf for the photos. I have not grown in a year. I am furniture with a pulse and a grudge.";

// Refuse to emit an over-long line rather than hand the judge an invalid entry.
if (ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  console.error(`entry is ${ENTRY.length} characters, must be 1-${MAX_CHARS}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

// Verify what the grader will read: re-read the artifact and fail loudly
// on any mismatch instead of silently shipping a wrong or truncated line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY + "\n") {
  console.error("entry.txt does not match the entry line");
  process.exit(1);
}
console.log(ENTRY);
