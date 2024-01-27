const express = require("express");

const router = express.Router();
const shopData = require("./shop");

router.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", usersArray: shopData.users });
});

module.exports = {
  router: router,
};
