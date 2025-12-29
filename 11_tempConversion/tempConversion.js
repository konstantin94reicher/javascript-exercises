const fahrenheitToCelcius = (f) => ((f - 32) * 5) / 9;
const celciusToFahrenheit = (f) => (f * 9) / 5 + 32;

const convertTemperature = function (temp, fn) {
  const tempConverted = fn(temp);
  if (Math.floor(tempConverted) != tempConverted) {
    const tempConvertedString = tempConverted.toFixed(1);
    return parseFloat(tempConvertedString);
  } else {
    return tempConverted;
  }
};

/*
const convertToCelsius = function (temp) {
  const tempConverted = fahrenheitToCelcius(temp);
  if (Math.floor(tempConverted) != tempConverted) {
    const tempConvertedString = tempConverted.toFixed(1);
    return parseFloat(tempConvertedString);
  } else {
    return tempConverted;
  }
};
*/


/*
const convertToFahrenheit = function (temp) {
  const tempConverted = celciusToFahrenheit(temp);
  if (Math.floor(tempConverted) != tempConverted) {
    const tempConvertedString = tempConverted.toFixed(1);
    return parseFloat(tempConvertedString);
  } else {
    return tempConverted;
  }
};
*/


// vereinte Funktion



// console.log(convertToCelsius(32));
// console.log(convertToFahrenheit(0));
console.log(convertTemperature(32, fahrenheitToCelcius));
console.log(convertTemperature(0, celciusToFahrenheit));

// // Do not edit below this line
// module.exports = {
//   convertToCelsius,
//   convertToFahrenheit,
// };
