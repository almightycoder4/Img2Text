const express = require("express");
const pancard = require("../components/pancard");
const multupload = require("../middleware/multer");
const cardRouter = express.Router();

cardRouter.post("/readpan", multupload, pancard);

module.exports = cardRouter;
