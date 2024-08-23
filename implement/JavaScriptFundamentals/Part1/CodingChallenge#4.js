// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300

const billValue1 = 275;
const billValue2 = 40;
const billValue3 = 430;

const tip1 =
  billValue1 >= 50 && billValue1 <= 300 ? billValue1 * 0.15 : billValue1 * 0.2;
const tip2 =
  billValue2 >= 50 && billValue2 <= 300 ? billValue2 * 0.15 : billValue2 * 0.2;
const tip3 =
  billValue3 >= 50 && billValue3 <= 300 ? billValue3 * 0.15 : billValue3 * 0.2;

console.log(
  `The bill was ${billValue1}, the tip was ${tip1}, and the total value ${
    billValue1 + tip1
  }`
);
console.log(
  `The bill was ${billValue2}, the tip was ${tip2}, and the total value ${
    billValue2 + tip2
  }`
);
console.log(
  `The bill was ${billValue3}, the tip was ${tip3}, and the total value ${
    billValue3 + tip3
  }`
);
console.log("-----------------------------------");
