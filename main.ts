import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, at most 200 characters, on the dumbest thing
// my agent did today. Deterministic: the same bytes on every run.
const LINE =
  "My agent read a 74-kilobyte rulebook cover to cover just to write one sentence, then saved it in the wrong folder.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
