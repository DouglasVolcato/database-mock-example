module.exports = class UpdateService {
  constructor(file) {
    this.file = file;
  }

  excute(body, params) {
    const fileData = this.file.read().data;
    const registroAtualizado = {
      id: body.id,
      nome: body.name,
    };
    const updatedData = fileData.map((item) =>
      Number(item.id) === Number(params.id) ? registroAtualizado : item
    );

    this.file.write({ data: updatedData });

    return;
  }
};
