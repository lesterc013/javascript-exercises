const leapYears = function (year) {
  // If year can't even be div by 4, return false
  if (year % 4 != 0) {
    return false;
  }

  // If divisble by 4 but not by 100, then is leap year
  if (year % 100 != 0) {
    return true;
  }

  // If can be div by 4 AND 100, then leap year is true if it can also be div by 400.
  if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
