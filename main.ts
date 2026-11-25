import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const pick = "Clock stuck at 12:00 three days. Microwave keeps resetting it.";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, pick, "utf8");
chmodSync(target, 0o644);

// Kirana rebuild #2: oven clock stuck at 12:00, the microwave is the culprit.
