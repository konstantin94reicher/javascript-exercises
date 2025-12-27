const removeFromArray = function (arr, num1, num2, num3, num4) {
  const index = [num1, num2, num3, num4];
  for (let i of index) {
    const indexI = arr.indexOf(i);
    if (arr.includes(i)) {
      if (indexI > -1) {
        arr.splice(indexI, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
