const fs = require("fs");
const directoryPath = "./images";
const cleaner = () => {
  try {
    fs.readdir(directoryPath, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(`${directoryPath}/${file}`, (err) => {
          if (err) throw err;
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = cleaner;
