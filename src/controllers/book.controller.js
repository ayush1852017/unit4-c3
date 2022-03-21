const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");
const Book = require("../models/book.model");

router.get("", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();
    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send({ messsage: error });
  }
});

router.post("", uploadFile.single("profilePic"), async (req, res) => {
  try {
    const book = await Book.create({
      likes: req.body.likes,
      coverImage: req.file.path,
      content: req.body.content,
    });
    console.log(req.file);
    return res.status(201).send(book);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});
// router.patch("/update-profilePic/:id", uploadFile.single("profilePic"), async (req, res) => {
//   try {
//     const target_user = await User.findById(req.params.id).lean().exec();
//     const dp_path = target_user.profilePic;
//     // console.log(dp_path)
//     if (dp_path) {
//       fs.unlink(path.join(dp_path), (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("File Deleted successfully");
//       });
//       const user = await User.findByIdAndUpdate(
//         req.params.id,
//         {
//           profilePic: req.file.path,
//         },
//         { new: true },
//       )
//         .lean()
//         .exec();
//       return res.status(201).send(user);
//     }
//   } catch (error) {
//     return res.status(500).send({ message: error });
//   }
// });

module.exports = router;
