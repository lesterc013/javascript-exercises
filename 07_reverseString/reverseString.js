const reverseString = function (toReverse) {
  let lastIndex = toReverse.length - 1;
  reversed = "";

  for (i = lastIndex; i >= 0; i--) {
    reversed += toReverse[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
