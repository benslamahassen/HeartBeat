const fs = require("fs");

// from Node js docs: https://nodejs.dev/learn/reading-files-with-nodejs

// Both fs.readFile() and fs.readFileSync() read the full content of the file in memory before returning the data.

// This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.

// In this case, a better option is to read the file content using streams.

const readFileStream = async (dir, file) => {
  return new Promise((resolve, reject) => {
    let content = [];
    const stream = fs.createReadStream(`${dir}${file}`, { encoding: "utf8" });
    stream.on("data", (data) => {
      const _data = data.split(/\n/);
      content = content.concat(_data);
    });
    stream.on("close", () => {
      resolve(content);
    });
    stream.on("error", (err) => {
      reject(err);
    });
  });
};

module.exports = readFileStream;