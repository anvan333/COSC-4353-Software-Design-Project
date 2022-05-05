const express = require("express"),
const user_profileRouter = express.Router()
= express.Router(),
  User = require("../models/user");

router.post("/add", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    new_user: req.body.new_user,
  });
  user.save((err, user) => {
    if (err) {
      res.status(500)
        .send({
          message: err
        });
      return;
    } else res.status(200)
      .send({
        message: "User Inserted to database!!"
      })
  });
});

module.exports = user_profileRouter;