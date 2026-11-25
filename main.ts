import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Chill — single-sentence horror, under 200 characters.
// One scene, one named person, one exact time: a knock that follows
// its old habit, and a fact at the end that makes the knock impossible.
// Nothing is explained; the dread is the last word, and the knock
// keeps its old habit, which is what makes it impossible to answer.
const ENTRY =
  "At 3:12, Mrs. Hartono knocked twice, the way she always did, and asked me to let her in, though we buried her on Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
