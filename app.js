require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = 8000;
const bodyParser = require("body-parser");
const phaseRouter = require("./routes/phase-router.js");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use("/phases", phaseRouter);

app.get("/", (req, res) => {
  res.send("Wellcome to my API");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
