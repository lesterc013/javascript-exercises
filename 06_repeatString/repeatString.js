const repeatString = function (toRepeat, timesToRepeat) {
  if (timesToRepeat < 0) {
    return "ERROR";
  }

  stringToReturn = "";
  for (let i = 0; i < timesToRepeat; i++) {
    stringToReturn += toRepeat;
  }
  return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
