const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

const validator = require("../middlewares/validator");

router.post(
  "/",
  validator({
    firstname: ["required"],
    firstname: ["required"],
    lastname: ["optional"],
    age:["required"],
    email: ["required"],
    profileImages:["required"],
  }),
  async (req, res) => {
    const errors = {};
    Object.keys(req.errors)?.map((err) => {
      if (req.errors[err].length > 0) errors[err] = req.errors[err];
    });
    if (Object.keys(errors).length > 0) {
      res.status(400).json({ data: errors });
    } else {
      res.status(200).json({ data: "Success" });
    }
  }
);

module.exports = router;
