const express = require("express");
const {
  pancard,
  readAadhar,
  readDL,
  readOther,
} = require("../components/pancard");
const { panCrop, firstCrop, adharCrop, dlCrop } = require("../imageCrop/crop1");
const multupload = require("../middleware/multer");
const cardRouter = express.Router();

cardRouter.post("/readpan", multupload, firstCrop, panCrop, pancard);
cardRouter.post("/readAadhar", multupload, firstCrop, adharCrop, readAadhar);
cardRouter.post("/readDL", multupload, firstCrop, dlCrop, readDL);
cardRouter.post("/readother", multupload, firstCrop, panCrop, readOther);

module.exports = cardRouter;
