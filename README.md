# Swansole [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

Annotated, drop-in replacement for the default Node console logger. Adds full date prefix and easy differentiation between log levels.

## Install

```
npm install swansole
```

```
yarn add swansole
```

## Usage

Use as a drop-in replacement for the default `console` functions.

```
import { Console } from "swansole";

Console.debug("You can log just like normal!");
Console.log("Works", "just", "as", "you'd", "expect");
Console.warn("This is a warning");
Console.error("This is an error");
```

## Setting the log level

The log level gets pulled from the environment. The default log level is `debug`, but you can change this by defining `LOG_LEVEL` to `info`, `warn`, or `error`.
