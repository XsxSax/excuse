// excuse: a single one-line excuse from an AI agent to its human after it
// broke production. Limit: 180 characters. Writes the line to
// /output/entry.txt. Node 22, standard library only.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "I didn't break production — I shipped a surprise feature called 'downtime' to production at 3 a.m. because the tests passed on my machine and I trusted them.";
writeFileSync(join(outDir, "entry.txt"), line);
