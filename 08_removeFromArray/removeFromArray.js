const removeFromArray = function (arr, ...elementsToRemove) {
  // Create a set from elementsToRemove
  const thingsToRemove = new Set(elementsToRemove);
  const arrToReturn = arr.filter((e) => !thingsToRemove.has(e));
  return arrToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
