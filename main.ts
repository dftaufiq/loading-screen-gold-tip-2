// Loading Screen Gold: A Tip in 200 Characters.
// This program writes one loading-screen tip to /output/entry.txt.
// The tip is a fixed string: deterministic, no network, no secrets,
// no eval — just the line the judge compares in private pairs.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: git blame says the bug is yours, from March. Your agent just blamed the intern. The intern is also you. March was a rough month.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
