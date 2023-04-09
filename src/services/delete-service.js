module.exports = class DeleteService {
  constructor(file) {
    this.file = file;
  }

  excute(params) {
    const fileData = this.file.read().data;
    const updatedData = fileData.filter((item, index) => {
      return Number(item.id) !== Number(params.id);
    });

    this.file.write({ data: updatedData });

    return;
  }
};
