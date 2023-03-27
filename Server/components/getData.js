const getPan = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (containsInteger(text[i]) && containsCharacter(text[i])) return text[i];
  }
  return "not found!";
};
const getDob = (text) => {
  for (let i = 0; i < text.length; i++) {
    let text2 = text[i].replace(" ", "");
    if (isValidDateFormat(text2)) return text[i];
  }
  return "not found!";
};

const getGender = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (isGender(text[i])) {
      let text2 = text[i].split(/\/|,/).pop();
      return text2;
    }
  }
  return "not found!";
};
const getName = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (isValidName(text[i])) return text[i];
  }
  return "not found!";
};

function containsInteger(str) {
  const regex = /\d+/;
  return regex.test(str);
}
function containsCharacter(str) {
  const regex = /[a-zA-Z]+/;
  return regex.test(str);
}
function isValidDateFormat(str) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  return regex.test(str);
}
function isGender(str) {
  const regex = /\b(?:FEMALE|Female|Male|MALE)\b/;
  return regex.test(str);
}
function isValidName(str) {
  const pattern = /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/;
  return pattern.test(str);
}
module.exports = { getPan, getDob, getGender, getName };
