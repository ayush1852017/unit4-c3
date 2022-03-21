const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp/my-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
function fileFilter(req, file, cb) {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted

  // To accept the file pass `true`, like so:
    if(file.mimetype=="image.jpeg" || file.mimetype=="")
  cb(null, true);
  // To reject this file pass `false`, like so:
  cb(null, false);


  // You can always pass an error if something goes wrong:
  cb(new Error("I don't have a clue!"));
}
const options = {
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }
}
module.exports = multer({ storage: storage });

