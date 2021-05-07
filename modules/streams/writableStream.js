const fs = require("fs");
const {
  commandLineArgs: { output }
} = require("../args");

const createWritableTextParserStream = () => {
  if (output) {
    return new Promise((resolve) => {
      fs.access(output, fs.constants.F_OK, (err) => {
        if (err) {
          process.stderr.write(`Problem with output file ${output} \n`);
          process.exit(1);
        } else {
          resolve(fs.createWriteStream(output, { flags: "a" }));
        }
      });
    });
  }

  return process.stdin;
};

module.exports = {
  createWritableTextParserStream
};
