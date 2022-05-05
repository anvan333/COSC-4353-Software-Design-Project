var express = require("express"),
  fuelQuoteRouter = express.Router(),
  User = require("../models/user");

  fuelQuoteRouter.post("/add", function (req, res) {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
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

module.exports = fuelQuoteRouter;

/*
const fuelQuoteSchema = new mongoose.Schema({
    gallons: { type: Number, required: true },
    delivery_address: { type: String, required: true},
    delivery_date: { type: Date, required: true },
    price_per: { type: Number, required: true },
    total: { type: Number, required: true },
    username: { type: String, required: true },
});*/
