import { writeFileSync, chmodSync } from "node:fs";
// pick v2: microwave keeps resetting it
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const target = join(dir, "entry.txt");
const text = "Clock stuck at 12:00 three days. Microwave keeps resetting it.";

writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
