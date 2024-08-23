// JavaScript Fundamentals – Part 1

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI}`);
console.log("-----------------------------------");
