const tessract = require("tesseract.js");
const sharp = require("sharp");
const fs = require("fs");
const finalCrop = require("../imageCrop/crop1");
const { getPan, getDob, getGender, getName, getAdharno } = require("./getData");
const { detectText } = require("../gVisionAI.js");
const pancard = async (req, res) => {
  try {
    const text = await detectText("./images/crop.png");
    let getText = text;
    console.log(getText);
    let splitText = getText.split(/\n|:/);
    let data = {
      name: splitText[0].replace(/[^\w\s]/gi, ""),
      fathername: splitText[1].replace(/[^\w\s]/gi, ""),
      dob: getDob(splitText),
      panNo: getPan(splitText).replace(/[^\w\s]/gi, ""),
    };
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};
const readAadhar = async (req, res) => {
  try {
    const text = await detectText("./images/crop.png");
    let getText = text;
    console.log(getText);
    let splitText = getText.split(/\n|:/);
    let data = {
      name: getName(splitText),
      dob: getDob(splitText),
      gender: getGender(splitText),
      adharno: getAdharno(splitText),
    };
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};
const readDL = async (req, res) => {
  try {
    const text = await detectText("./images/crop.png");
    let getText = text;
    console.log(getText);
    let splitText = getText.split(/\n|:/);
    // let data = {
    //   name: splitText[0].replace(/[^\w\s]/gi, ""),
    //   fathername: splitText[1].replace(/[^\w\s]/gi, ""),
    //   dob: getDob(splitText),
    //   panNo: getPan(splitText).replace(/[^\w\s]/gi, ""),
    // };
    res.send(getText);
  } catch (error) {
    console.log(error.message);
  }
};
const readOther = async (req, res) => {
  try {
    const filePath = req.file.path;
    console.log(filePath);
    const inputFile = filePath;
    const inputBuffer = fs.readFileSync(inputFile);
    sharp(inputBuffer)
      .resize(500, 323)
      .extract({ left: 20, top: 80, width: 260, height: 180 })
      .toFormat("png")
      .toFile("./images/crop.png", (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });

    tessract
      .recognize("./images/crop.png", "eng", {
        logger: (m) => {
          //console.log(m);
        },
      })
      .then((result) => {
        res.send(result.data.text);
      });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { pancard, readAadhar, readDL, readOther };
