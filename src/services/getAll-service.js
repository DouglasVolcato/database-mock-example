module.exports = class GetAllService {
  constructor(file) {
    this.file = file;
  }

  excute() {
    return this.file.read().data;
  }
};
