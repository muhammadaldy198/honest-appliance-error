import { writeFile, chmod } from "node:fs/promises";
// the clock never leaves 12:00 — three days of flashing, and the microwave keeps wiping it itself
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const joke =
  "Clock stuck at 12:00 three days. Microwave keeps resetting it.";

async function main(): Promise<void> {
  const here = dirname(fileURLToPath(import.meta.url));
  const outFile = resolve(here, "entry.txt");
  await writeFile(outFile, joke, "utf8");
  await chmod(outFile, 0o644);
}

await main();
