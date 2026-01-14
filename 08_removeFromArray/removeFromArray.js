const removeFromArray = function (
  nums,
  firstElementToRemove,
  ...anyOtherElements
) {
  const toRemoveSet = new Set();
  toRemoveSet.add(firstElementToRemove);
  for (const e of anyOtherElements) {
    toRemoveSet.add(e);
  }

  let arrToReturn = [];

  for (i = 0; i < nums.length; i++) {
    if (toRemoveSet.has(nums[i])) {
      continue;
    }

    arrToReturn.push(nums[i]);
  }

  return arrToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
