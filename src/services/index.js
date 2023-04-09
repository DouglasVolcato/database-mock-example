const FileWriterHelper = require("../helpers/fileWriter-helper");
const CreateService = require("./create-service");
const DeleteService = require("./delete-service");
const GetAllService = require("./getAll-service");
const UpdateService = require("./update-service");

const file = new FileWriterHelper();

const getAllService = new GetAllService(file);
const createService = new CreateService(file);
const deleteService = new DeleteService(file);
const updateService = new UpdateService(file);

module.exports = {
  getAllService,
  createService,
  deleteService,
  updateService,
};
