const fs = require("fs");
const {
  commandLineArgs: { input }
} = require("../args");

const createReadableTextParserStream = () => {
  if (input) {
    return new Promise((resolve) => {
      fs.access(input, fs.constants.F_OK, (err) => {
        if (err) {
          process.stderr.write(`Problem with input file ${input} \n`);
          process.exit(1);
        } else {
          resolve(fs.createReadStream(input));
        }
      });
    });
  }
  return process.stdin;
};

module.exports = {
  createReadableTextParserStream
};


