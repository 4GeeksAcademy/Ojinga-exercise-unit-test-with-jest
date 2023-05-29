// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // Japan yen
    "USD": 1.2,   // US dollar
    "GBP": 0.8,   // British pound
  };
  
  // we declare the function with the exact name "fromEuroToDollar"
  const fromEuroToDollar = function (valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
  }
  
  const fromDollarToYen = function (valueInDollar) {
    // convert the given valueInDollar to yen
    let valueInYen = (valueInDollar * oneEuroIs.JPY / oneEuroIs.USD).toFixed(2);
    // return the yen value as a number
    return parseFloat(valueInYen);
  }
  
  const fromYenToPound = function (valueInYen) {
    // convert the given valueInYen to pounds
    let valueInPound = (valueInYen * oneEuroIs.GBP / oneEuroIs.JPY).toFixed(4);
    // return the pound value as a number
    return parseFloat(valueInPound);
  }
  
  // export the functions to be used in other files
  module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
  };
  