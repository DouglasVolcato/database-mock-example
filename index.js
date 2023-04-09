const express = require("express");
const cors = require("cors");
const app = express();
const {
  getAllService,
  createService,
  deleteService,
  updateService,
} = require("./src/services/index");

app.use(express.json());
app.use(cors());

app.get("/registers", (req, res) => {
  const fileData = getAllService.excute();
  res.send(fileData);
});

app.post("/registers", (req, res) => {
  const { body } = req;
  createService.excute(body);
  res.status(200).send("Register added.");
});

app.put("/registers/:id", (req, res) => {
  const { body, params } = req;
  updateService.excute(body, params);
  res.send("Registro atualizado com sucesso.");
});

app.delete("/registers/:id", (req, res) => {
  const { params } = req;
  deleteService.excute(params);
  res.send("Registro excluído com sucesso.");
});

app.listen(3333, () => {
  console.log("http://localhost:3333");
});
