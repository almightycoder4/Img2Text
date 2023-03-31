const tessract = require("tesseract.js");
const cleaner = require("./cleaner");
const {
  getPan,
  getDob,
  getGender,
  getName,
  getAdharno,
  getAddress,
  dlFatherName,
  getDLNum,
  getDLname,
  getDLValidity,
  getDLdob,
} = require("./getData");
const { detectText } = require("../gVisionAI.js");
const pancard = async (req, res) => {
  try {
    const text = await detectText("./images/crop.png");
    let getText = text;
    let splitText = getText.split(/\n|:/);
    let data = {
      name: splitText[0].replace(/[^\w\s]/gi, ""),
      fathername: splitText[1].replace(/[^\w\s]/gi, ""),
      dob: getDob(splitText),
      panNo: getPan(splitText).replace(/[^\w\s]/gi, ""),
    };
    res.send(data);
    cleaner();
  } catch (error) {
    console.log(error.message);
    res.send({
      data: "Select Valid Card Type",
    });
  }
};
const readAadhar = async (req, res) => {
  try {
    const text = await detectText("./images/crop.png");
    let getText = text;
    let splitText = getText.split(/\n|:/);
    let data = {
      name: getName(splitText),
      dob: getDob(splitText),
      gender: getGender(splitText),
      adharno: getAdharno(splitText),
    };
    res.send(data);
    cleaner();
  } catch (error) {
    console.log(error.message);
    res.send({
      data: "Select Valid Card Type",
    });
  }
};
const readDL = async (req, res) => {
  try {
    const text = await detectText("./images/crop.png");
    let splitText = text.split("\n");
    let data = {
      name: getDLname(splitText),
      dlNo: getDLNum(splitText),
      address: getAddress(splitText),
      fatherName: dlFatherName(splitText),
      validity: getDLValidity(splitText),
      dob: getDLdob(splitText),
    };
    res.send(data);
    cleaner();
  } catch (error) {
    console.log(error.message);
    res.send({
      data: "Select Valid Card Type",
    });
  }
};
const readOther = async (req, res) => {
  try {
    tessract
      .recognize("./images/crop.png", "eng", {
        logger: (m) => {},
      })
      .then((result) => {
        let splitText = result.data.text.split("\n");
        res.send({
          data: splitText,
        });
      });
  } catch (error) {
    console.log(error.message);
    res.send({
      data: "Select Valid Card Type",
    });
  }
};
module.exports = { pancard, readAadhar, readDL, readOther };
