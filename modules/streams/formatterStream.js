const { Transform } = require("stream");
const { caesarShift } = require("../utils/caesarShift");
const {
  commandLineArgs: { shift, action }
} = require("../args");

class TextFormatterStream extends Transform {
  constructor(options, shift, isEncode) {
    super(options);

    this.shift = shift;
    this.isEncode = isEncode;
  }

  _transform(chunk, encoding, callback) {
    const formattedChunk = caesarShift(
      chunk.toString(),
      this.isEncode ? this.shift : -this.shift
    );

    // Exit when pressed CTRL C.
    if (chunk === "\u0003") {
      process.exit(1);
    }

    callback(null, formattedChunk);
  }
}

const createTransformTextStream = () =>
  new TextFormatterStream({}, shift, action === "encode");

module.exports = {
  createTransformTextStream
};

