require("dotenv").config();
const vision = require("@google-cloud/vision");
const CONFIG2 = {
  credentials: {
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
  },
};
const client = new vision.ImageAnnotatorClient(CONFIG2);

const detectText = async (filepath) => {
  try {
    const [result] = await client.textDetection(filepath);
    return result.fullTextAnnotation.text;
  } catch (error) {
    console.log(error.message);
  }

  //console.log(result.fullTextAnnotation.text);
};
//detectText("../images/crop.png");
module.exports = { detectText };
