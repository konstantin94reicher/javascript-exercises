const convertToCelsius = function (temp) {
  const fahrenheitToCelcius = (f) => ((f - 32) * 5) / 9;
  const tempConverted = fahrenheitToCelcius(temp);
  if (Math.floor(tempConverted) != tempConverted) {
    const tempConvertedString = tempConverted.toFixed(1);
    return parseFloat(tempConvertedString);
  } else {
    return tempConverted;
  }
};

const convertToFahrenheit = function (temp) {
  const celciusToFahrenheit = (f) => (f * 9) / 5 + 32;
  const tempConverted = celciusToFahrenheit(temp);
  if (Math.floor(tempConverted) != tempConverted) {
    const tempConvertedString = tempConverted.toFixed(1);
    return parseFloat(tempConvertedString);
  } else {
    return tempConverted;
  }
};


// vereinte Funktion
// const convertTemperature = function (temp, fn) {
//   const tempConverted = fn(temp);
//   if (Math.floor(tempConverted) != tempConverted) {
//     const tempConvertedString = tempConverted.toFixed(1);
//     return parseFloat(tempConvertedString);
//   } else {
//     return tempConverted;
//   }
// };

// console.log(convertToCelsius(32));
// console.log(convertToFahrenheit(0));
// console.log(convertTemperature(32, convertToCelsius));
// console.log(convertTemperature(0, convertToFahrenheit));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
