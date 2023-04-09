const fs = require("fs");

module.exports = class FileWriterHelper {
  fileName = "database.json";

  read() {
    const file = fs.readFileSync(this.fileName);
    return JSON.parse(file);
  }

  write(newData) {
    return fs.writeFileSync(this.fileName, JSON.stringify(newData));
  }
};
