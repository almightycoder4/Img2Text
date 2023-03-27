const express = require("express");
const {
  pancard,
  readAadhar,
  readDL,
  readOther,
} = require("../components/pancard");
const {
  finalCrop,
  firstCrop,
  adharCrop,
  dlCrop,
} = require("../imageCrop/crop1");
const multupload = require("../middleware/multer");
const cardRouter = express.Router();

cardRouter.post("/readpan", multupload, firstCrop, finalCrop, pancard);
cardRouter.post("/readAadhar", multupload, firstCrop, adharCrop, readAadhar);
cardRouter.post("/readDL", multupload, firstCrop, dlCrop, readDL);
cardRouter.post("/readother", multupload, firstCrop, finalCrop, readOther);

module.exports = cardRouter;
