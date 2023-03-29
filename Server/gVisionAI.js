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
  const [result] = await client.textDetection(filepath);
  return result.fullTextAnnotation.text;
  //console.log(result.fullTextAnnotation.text);
};
console.log(process.env.TEST_KEY);
//detectText("../images/crop.png");
module.exports = { detectText };
