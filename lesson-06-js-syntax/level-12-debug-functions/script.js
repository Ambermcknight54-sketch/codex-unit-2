// Level 12 — Debug function declarations and calls
// TODO: Fix five broken function declarations and their corresponding calls.

function sayHello() {
  return "hello";
}
const result1 = sayHello();

function calculateTotal(price, tax) {
  return price + tax;
}
const result2 = calculateTotal(10, 2);

// 3. Fixed: Added missing opening curly brace '{' to the function body
function greetUser(name) {
  return "Welcome back, " + name;
}
const result3 = greetUser("Ava");

// 4. Fixed: Restructured into a proper arrow function assignment format
const doubleValue = (num) => {
  return num * 2;
};
const result4 = doubleValue(5);

// 5. Fixed: Added missing closing parenthesis ')' on the execution call line
function systemAlert() {
  return "System error detected!";
}
const result5 = systemAlert();

// Default-export one of the repaired functions for unit test inspection
export default sayHello;
