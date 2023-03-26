const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "images");
  },
  filename: (res, file, cb) => {
    const originalName = file.originalname;
    const extension = originalName.split(".").pop();

    cb(null, "image." + extension);
  },
});
const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 500 * 1024, // 1MB
  },
});

const multupload = upload.single("image");
module.exports = multupload;
