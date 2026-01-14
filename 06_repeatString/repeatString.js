const repeatString = function (toRepeat, timesToRepeat) {
  if (timesToRepeat < 0) return "ERROR";

  let toReturn = "";
  for (let i = 0; i < timesToRepeat; i++) {
    toReturn += toRepeat;
  }
  return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
