const sumAll = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (Math.floor(num1) != num1 || Math.floor(num2) != num2) {
    return "ERROR";
  } else {
    let arr = [num1, num2];
    const arrSorted = arr.sort();
    let numbers = [];
    for (let i = arrSorted[0]; i <= arrSorted[1]; i++) {
      numbers.push(i);
    }
    const initialValue = 0;
    const sumOfArray = numbers.reduce(
      (acc, curr) => acc + curr,
      initialValue
    );
    return sumOfArray;
  }
};

// Do not edit below this line
module.exports = sumAll;
