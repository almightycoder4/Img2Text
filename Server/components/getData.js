const { text } = require("express");

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

/////////////////Adhar Card Get Functions///////////////////////////
const getName = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (isValidName(text[i])) return text[i];
  }
  return "not found!";
};
const getAdharno = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (isValidAdharno(text[i])) return text[i];
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
function isValidAdharno(str) {
  const pattern = /^\d{4} \d{4} \d{4}$/;
  return pattern.test(str);
}

///////////////////// Driving License GetData Functions //////////////////

function getAddress(text) {
  let address;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "Address:") {
      address = text.splice(i, i + 1);
    }
  }
  const arr = address.filter((item) => {
    return item.length > 10;
  });
  let str = "";
  for (let item of arr) str += item;
  return str;
}

function dlFatherName(text) {
  for (let i = 0; i < text.length; i++) {
    if (
      text[i].includes("Son") ||
      text[i].includes("Daughter") ||
      text[i].includes("Wifeof")
    ) {
      let str = text.splice(i, i);
      return str[0].split(":").pop();
    }
  }
}
function getDLNum(text) {
  const regex = /^[a-zA-Z0-9]{4}\s[0-9]{11}$/;
  const result = text.filter((str) => regex.test(str));
  return result[0];
}
function getDLname(text) {
  const pattern1 = /^[A-Z]+\s+[A-Z]+\s*$/i;
  const pattern2 = /^[A-Za-z]+ [A-Za-z]+ [A-Za-z]+$/;
  const name = text.filter((str) => {
    if (pattern1.test(str) || pattern2.test(str)) return str;
  });

  return name[0];
}
function getDLValidity(text) {
  const pattern = /\d{2}-\d{2}-\d{4}\s+\d{2}-\d{2}-\d{4}/;
  const validity = text.filter((items) => pattern.test(items));

  return validity[0];
}
function getDLdob(text) {
  const pattern = /\d{2}-\d{2}-\d{4}/;
  const dob = text.filter((items) => {
    console.log(items);
    if (items.includes("Date of Birth")) {
      return items;
    }
  });
  const extractedDate = dob[0].match(pattern)[0];
  return extractedDate;
}

module.exports = {
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
};
