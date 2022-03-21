const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");
const User = require("../models/user.model");

router.post("", uploadFile.array("profileImages", 10), async (req, res) => {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      profileImages: req.file.path,
    });
    console.log(req.file);
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});
router.patch("/update-profilePic/:id", uploadFile.array("profileImages", 10), async (req, res) => {
  try {
    const target_user = await User.findById(req.params.id).lean().exec();
    const dp_path = target_user.profileImages;
    // console.log(dp_path)
    if (dp_path) {
      fs.unlink(path.join(dp_path), (err) => {
        if (err) {
          throw err;
        }
        console.log("File Deleted successfully");
      });
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          profilePic: req.file.path,
        },
        { new: true },
      )
        .lean()
        .exec();
      return res.status(201).send(user);
    }
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

module.exports = router;
