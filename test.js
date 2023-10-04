import * as dotenv from "dotenv";
import pkg from "ansi-colors";

dotenv.config({ path: "./.env.test.local" });

import { Console } from "./index.js";

const colors = pkg;

function getTime () {
  const padDate = (dateValue) => {
    return dateValue.toString().padStart(2, "0");
  };

  const date = new Date();
  const yearStr = date.getFullYear().toString();
  const monthStr = padDate(date.getMonth() + 1);
  const dayStr = padDate(date.getDate());
  const hourStr = padDate(date.getHours());
  const minuteStr = padDate(date.getMinutes());
  const secondStr = padDate(date.getSeconds());

  const dateStr = `${yearStr}-${monthStr}-${dayStr}`;
  const timeStr = `${hourStr}:${minuteStr}:${secondStr}`;

  return `${dateStr}, ${timeStr}`;
}

console.log(`\n${colors.black.bgCyanBright("[  DEBUG  ]")}`);
console.log(colors.black.bgMagentaBright("  OUTPUT:  "));
Console.debug("Debugging", 1, 2, 3);
console.log(colors.black.bgGreenBright(" EXPECTED: "));
if (
  !process.env.LOG_LEVEL ||
  process.env.LOG_LEVEL === "debug"
) {
  console.debug(
    getTime(),
    colors.black.bgCyanBright("[  DEBUG  ]"),
    "Debugging",
    1,
    2,
    3
  );
}

console.log(`\n${colors.black.bgBlueBright("[   LOG   ]")}`);
console.log(colors.black.bgMagentaBright("  OUTPUT:  "));
Console.log("This","is","a","test");
console.log(colors.black.bgGreenBright(" EXPECTED: "));
if (
  !process.env.LOG_LEVEL ||
  process.env.LOG_LEVEL === "info" ||
  process.env.LOG_LEVEL === "debug"
) {
  console.log(
    getTime(),
    colors.black.bgBlueBright("[   LOG   ]"),
    "This",
    "is",
    "a",
    "test"
  );
}

console.log(`\n${colors.black.bgYellowBright("[ WARNING ]")}`);
console.log(colors.black.bgMagentaBright("  OUTPUT:  "));
Console.warn("Oh no! This is a warning");
console.log(colors.black.bgGreenBright(" EXPECTED: "));
if (
  !process.env.LOG_LEVEL ||
  process.env.LOG_LEVEL === "warn" ||
  process.env.LOG_LEVEL === "info" ||
  process.env.LOG_LEVEL === "debug"
) {
  console.warn(
    getTime(),
    colors.black.bgYellowBright("[ WARNING ]"),
    "Oh no! This is a warning"
  );
}

console.log(`\n${colors.black.bgRedBright("[  ERROR  ]")}`);
console.log(colors.black.bgMagentaBright("  OUTPUT:  "));
Console.error("OH NO! THIS IS AN ERROR");
console.log(colors.black.bgGreenBright(" EXPECTED: "));
if (
  !process.env.LOG_LEVEL ||
  process.env.LOG_LEVEL === "error" ||
  process.env.LOG_LEVEL === "warn" ||
  process.env.LOG_LEVEL === "info" ||
  process.env.LOG_LEVEL === "debug"
) {
  console.error(
    getTime(),
    colors.black.bgRedBright("[  ERROR  ]"),
    "OH NO! THIS IS AN ERROR"
  );
}
