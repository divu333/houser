const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const controller = require("../server/controller");

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/houses", controller.getAll);
app.post("/api/houses", controller.create);
app.delete("/api/houses/:id", controller.delete);

const port = 4000;

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});
