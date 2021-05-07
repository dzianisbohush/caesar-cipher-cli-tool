#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const { pipeline, Transform, pipe } = require("stream");
const {
  createReadableTextParserStream
} = require("./modules/streams/readableStream");
const {
  createWritableTextParserStream
} = require("./modules/streams/writableStream");
const {
  createTransformTextStream
} = require("./modules/streams/formatterStream");

clear();

console.log(
  chalk.yellow(
    figlet.textSync("Caesar cipher cli tool", { horizontalLayout: "full" })
  )
);

(async () => {
  pipeline(
    await createReadableTextParserStream(),
    createTransformTextStream(),
    await createWritableTextParserStream(),
    (err) => {
      if (err) {
        console.log(chalk.red(`Failed: ${err.message}`));
      } else {
        console.log(chalk.green("Worked out successfully"));
      }
    }
  );
})();
