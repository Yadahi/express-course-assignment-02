const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const shopRoute = require("./routes/shop");
const usersRoute = require("./routes/users");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute.router);
app.use(usersRoute.router);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3001);
