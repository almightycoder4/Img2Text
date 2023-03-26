const express = require("express");
const {
  pancard,
  readAadhar,
  readDL,
  readOther,
} = require("../components/pancard");
const multupload = require("../middleware/multer");
const cardRouter = express.Router();

cardRouter.post("/readpan", multupload, pancard);
cardRouter.post("/readAadhar", multupload, readAadhar);
cardRouter.post("/readDL", multupload, readDL);
cardRouter.post("/readother", multupload, readOther);

module.exports = cardRouter;
