const reverseString = function (str) {
  let reversed = "";

  // Iterate from back of the string to the front
  for (let i = str.length - 1; i >= 0; i--) {
    // Concat each element to a variable
    reversed += str[i];
  }
  // Return that variable
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
