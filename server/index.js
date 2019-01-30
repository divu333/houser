const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.get("/api/houses", controller.getAll);

const port = 4000;

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});
