const express = require("express");

const router = express.Router();
const users = [];

router.get("/", (req, res, next) => {
  res.render("shop", { pageTitle: "Shop" });
});

router.post("/", (req, res, next) => {
  users.push({ name: req.body.user, userId: Math.random().toString() });
  res.redirect("/users");
});

module.exports = {
  users: users,
  router: router,
};
