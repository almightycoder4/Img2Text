const tessract = require("tesseract.js");
const sharp = require("sharp");
const fs = require("fs");

const pancard = async (req, res) => {
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
        //console.log(result.data.text);
        let getText = result.data.text;
        let splitText = getText.split("\n");

        let data = {
          name: splitText[0].replace(/[^\w\s]/gi, ""),
          fathername: splitText[1].replace(/[^\w\s]/gi, ""),
          dob: splitText[2],
          panNo: splitText[5].replace(/[^\w\s]/gi, ""),
        };
        res.send(data);
        console.log(data);
      });
  } catch (error) {
    console.log(error.message);
  }
};
const readAadhar = async (req, res) => {
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
const readDL = async (req, res) => {
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
