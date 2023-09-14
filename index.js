import chalk from "chalk";

const ERROR = 0;
const WARN = 1;
const INFO = 2;
const DEBUG = 3;

const getLogLevel = () => {
  return process.env.LOG_LEVEL === "error"
    ? ERROR
    : process.env.LOG_LEVEL === "warn"
    ? WARN
    : process.env.LOG_LEVEL === "info"
    ? INFO
    : DEBUG;
};

const getTime = () => {
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
};

class Console {
  static log(...args) {
    if (getLogLevel() >= INFO) {
      args.unshift(getTime(), chalk.black.bgBlueBright("[   LOG   ]"));
      console.log.apply(this, args);
    }
  }

  static debug(...args) {
    if (getLogLevel() >= DEBUG) {
      args.unshift(getTime(), chalk.black.bgCyanBright("[  DEBUG  ]"));
      console.debug.apply(this, args);
    }
  }

  static error(...args) {
    if (getLogLevel() >= ERROR) {
      args.unshift(getTime(), chalk.black.bgRedBright("[  ERROR  ]"));
      console.error.apply(this, args);
    }
  }

  static warn(...args) {
    if (getLogLevel() >= WARN) {
      args.unshift(getTime(), chalk.black.bgYellowBright("[ WARNING ]"));
      console.warn.apply(this, args);
    }
  }
}

export { Console };
