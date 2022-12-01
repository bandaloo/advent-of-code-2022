import { readFileSync } from "fs";
import * as day1 from "./day1";
import * as day2 from "./day2";
import * as day3 from "./day3";
import * as day4 from "./day4";
import * as day5 from "./day5";
import * as day6 from "./day6";
import * as day7 from "./day7";
import * as day8 from "./day8";
import * as day9 from "./day9";
import * as day10 from "./day10";
import * as day11 from "./day11";
import * as day12 from "./day12";
import * as day13 from "./day13";
import * as day14 from "./day14";
import * as day15 from "./day15";
import * as day16 from "./day16";
import * as day17 from "./day17";
import * as day18 from "./day18";
import * as day19 from "./day19";
import * as day20 from "./day20";
import * as day21 from "./day21";
import * as day22 from "./day22";
import * as day23 from "./day23";
import * as day24 from "./day24";
import * as day25 from "./day25";
import * as day26 from "./day26";
import * as day27 from "./day27";
import * as day28 from "./day28";
import * as day29 from "./day29";
import * as day30 from "./day30";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("not enough args");
  process.exit();
}

const day = parseInt(args[0]);

if (!(day >= 1 && day <= 30)) {
  console.error("invalid day");
  process.exit();
}

const sample = args.length > 1 && args[1] === "sample";

const input = (() => {
  try {
    return readFileSync(`./input/day${day}${sample ? "sample" : ""}.txt`, {
      encoding: "utf8",
      flag: "r",
    });
  } catch {
    console.error("could not read input file");
    process.exit();
  }
})();

const [result1, result2] = [
  day1.puzzle,
  day2.puzzle,
  day3.puzzle,
  day4.puzzle,
  day5.puzzle,
  day6.puzzle,
  day7.puzzle,
  day8.puzzle,
  day9.puzzle,
  day10.puzzle,
  day11.puzzle,
  day12.puzzle,
  day13.puzzle,
  day14.puzzle,
  day15.puzzle,
  day16.puzzle,
  day17.puzzle,
  day18.puzzle,
  day19.puzzle,
  day20.puzzle,
  day21.puzzle,
  day22.puzzle,
  day23.puzzle,
  day24.puzzle,
  day25.puzzle,
  day26.puzzle,
  day27.puzzle,
  day28.puzzle,
  day29.puzzle,
  day30.puzzle,
][day - 1](input);

console.log(`Day ${day}${sample ? " (for sample input)" : ""}`);
console.log("Part 1:", result1);
console.log("Part 2:", result2);
