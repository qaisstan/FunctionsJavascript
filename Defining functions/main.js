// Create a new function that converts gallons
// to liters: convertToLiters

// function declaration
// function declaration can be invoked before they are declared

function convertToLiters(gallons) {
  return gallons * 3.785;
}

// function expression
// they need to be declared before they are invoked
// Limitation: Not hoisted
const convertToLiter = function (gallons) {
  return gallons * 3.785;
};

let result = convertToLiter(10);

// Go to use ESLint no-use-before-define

// arrow functions
// limitations: not hoisted, cannot be used as constructor functions,-
// - can not use the arguments object, they do not have their own "this" binding
const convertGallonToLiter = (gallons) => gallons * 3.785;

// function constructor
// don't use this shit stupid
const ConvertTolit = new Function("gallon", "return gallon * 3.785;");

// Recursion
// conditions: call its self and must has a stop condition

// IIFE
// you can use any function to create this
(function printDate() {
  let date = new Date().toLocaleDateString();
  console.log(date);
})();
