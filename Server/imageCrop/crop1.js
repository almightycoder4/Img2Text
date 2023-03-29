const sharp = require("sharp");
const fs = require("fs");

const firstCrop = async (req, res, next) => {
  try {
    const filePath = req.file.path;
    console.log(filePath);
    const inputFile = filePath;
    const inputBuffer = fs.readFileSync(inputFile);
    sharp(inputBuffer)
      .resize({
        width: 550,
        height: 340,
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .toFile("./images/image.png", (err, info) => {
        if (err) {
          console.log(err);
          return false;
        } else {
          console.log(info);
          console.log("first done");
          return true;
        }
      });
    next();
  } catch (error) {}
};
const panCrop = async (req, res, next) => {
  try {
    setTimeout(() => {
      const smallFile = "./images/image.png";
      const smallBuffer = fs.readFileSync(smallFile);
      sharp(smallBuffer)
        .extract({ left: 10, top: 85, width: 300, height: 220 })
        .normalize() // adjust the colors to make them more natural
        .sharpen() // increase the sharpness of the image
        .gamma(1.0)
        .toFormat("png")
        .toFile("./images/crop.png", (err, info) => {
          if (err) {
            console.log(err);
            return false;
          } else {
            console.log(info);
            return true;
          }
        });
    }, 500);
    setTimeout(() => {
      next();
    }, 800);
  } catch (error) {
    console.log(error.message);
  }
};
const adharCrop = async (req, res, next) => {
  try {
    setTimeout(() => {
      const smallFile = "./images/image.png";
      const smallBuffer = fs.readFileSync(smallFile);
      sharp(smallBuffer)
        .extract({ left: 160, top: 60, width: 270, height: 240 })
        .greyscale()
        .normalize()
        .sharpen()
        .gamma(1.0)
        .toFormat("png")
        .toFile("./images/crop.png", (err, info) => {
          if (err) {
            console.log(err);
            return false;
          } else {
            console.log(info);
            return true;
          }
        });
    }, 500);
    setTimeout(() => {
      next();
    }, 1000);
  } catch (error) {
    console.log(error.message());
  }
};
const dlCrop = async (req, res, next) => {
  try {
    setTimeout(() => {
      const smallFile = "./images/image.png";
      const smallBuffer = fs.readFileSync(smallFile);
      sharp(smallBuffer)
        .extract({ left: 10, top: 50, width: 420, height: 280 })
        .normalize() // adjust the colors to make them more natural
        .sharpen() // increase the sharpness of the image
        .gamma(1.0)
        .toFormat("png")
        .toFile("./images/crop.png", (err, info) => {
          if (err) {
            console.log(err);
            return false;
          } else {
            console.log(info);
            return true;
          }
        });
    }, 500);
    setTimeout(() => {
      next();
    }, 800);
  } catch (error) {
    console.log(error.message);
  }
};
const noCrop = async (req, res, next) => {
  try {
    setTimeout(() => {
      const smallFile = "./images/image.png";
      const smallBuffer = fs.readFileSync(smallFile);
      sharp(smallBuffer)
        .extract({ left: 0, top: 0, width: 550, height: 340 })
        .normalize() // adjust the colors to make them more natural
        .sharpen() // increase the sharpness of the image
        .gamma(1.0)
        .toFormat("png")
        .toFile("./images/crop.png", (err, info) => {
          if (err) {
            console.log(err);
            return false;
          } else {
            console.log(info);
            return true;
          }
        });
    }, 500);
    setTimeout(() => {
      next();
    }, 800);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { panCrop, firstCrop, adharCrop, dlCrop, noCrop };
