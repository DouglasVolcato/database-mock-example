module.exports = class CreateService {
  constructor(file) {
    this.file = file;
  }

  excute(body) {
    const fileData = this.file.read().data;
    const newRegister = {
      id: body.id,
      name: body.name,
    };

    fileData.push(newRegister);
    this.file.write({ data: fileData });

    return;
  }
};
