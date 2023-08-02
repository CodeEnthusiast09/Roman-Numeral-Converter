// VARIABLES.

var num = document.getElementById("num-input");

var reset = document.getElementById("reset");

var convert = document.getElementById("convert");

var outputValue = document.getElementById("output");

// TO ENSURE USERS INPUT VALID NUMBERS

const numValidate = () => {
  var number = num.value;

  var text;

  if (isNaN(number) || number < 1) {
    text = "Enter a valid number";
    document.getElementById("input-error").style.color = "red";
    document.getElementById("num-input").style.borderColor = "red";
  } else {
    text = "";
    document.getElementById("num-input").style.borderColor = "";
    document.getElementById("input-header").style.color = "";
  }
  document.getElementById("input-error").innerHTML = text;
};

const clearInput = () => {
  num.value = "";
  outputValue.innerHTML = "";
};

// TO CONVERT TO  ROMAN NUMERALS

const converter = () => {
  var number = num.value;

  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let accumulator = "";
  for (const key in lookupTable) {
    const numberValue = lookupTable[key];

    while (numberValue <= number) {
      number -= numberValue;
      accumulator += key;
    }
  }

  // return accumulator;
  document.getElementById("output").innerHTML = accumulator;
};

// console.log(convertToRoman(36));
