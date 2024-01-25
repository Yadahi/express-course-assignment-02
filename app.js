const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const shopRoute = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");

app.use("/", shopRoute);

app.listen(3001);
