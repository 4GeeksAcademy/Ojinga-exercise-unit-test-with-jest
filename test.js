// Import the functions from app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 4.2 dollars", () => {
  const euros = 3.5;
  const expected = 4.2;
  expect(fromEuroToDollar(euros)).toBe(expected);
});

test("One dollar should be 106.58 yen", () => {
  const dollars = 1;
  const expected = 106.58;
  expect(fromDollarToYen(dollars)).toBe(expected);
});

test("One yen should be 0.0063 pounds", () => {
  const yen = 1;
  const expected = 0.0063;
  expect(fromYenToPound(yen)).toBe(expected);
});
