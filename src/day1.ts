import { Puzzle } from "./types";

export const puzzle: Puzzle<number> = (input: string) => {
  const totals = input
    .split("\n\n")
    .map((it) => it.split("\n"))
    .map((it) => it.map((it) => parseInt(it)))
    .map((it) => it.reduce((p, c) => p + c), 0);

  const result1 = Math.max(...totals);
  const result2 = totals
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((p, c) => p + c, 0);

  return [result1, result2];
};
