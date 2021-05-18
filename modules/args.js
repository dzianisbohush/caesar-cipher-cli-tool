const yargs = require("yargs");

const checkArgs = ({ shift, action }) => {
  if (isNaN(shift)) {
    throw new Error("Only number can be passed as value for shift.");
  }

  if (shift <= 0) {
    throw new Error(
      "Only number more than 0 can be passed as value for shift."
    );
  }

  if (!["encode", "decode"].includes(action)) {
    throw new Error("Only encode or decode can be passed as value for action.");
  }

  return true;
};

const commandLineArgs = yargs
  .usage(
    "Usage: node . -a [encode|decode] -s [positive_number] -i [path] -o [path]"
  )
  .option("s", {
    alias: "shift",
    describe: "a shift",
    type: "number",
    demandOption: true
  })
  .option("i", {
    alias: "input",
    describe: "an input file",
    type: "string",
    demandOption: false
  }) //check
  .option("o", {
    alias: "output",
    describe: "an output file",
    type: "string",
    demandOption: false
  }) //check
  .option("a", {
    alias: "action",
    describe: "an action encode/decode",
    type: "string",
    demandOption: true
  })
  .check(checkArgs).argv;

module.exports = {
  commandLineArgs
};
