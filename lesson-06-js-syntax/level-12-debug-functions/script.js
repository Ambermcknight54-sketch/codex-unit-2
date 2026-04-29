// Level 12 — Debug function declarations and calls
// TODO: Fix five broken function declarations and their corresponding calls.

function sayHi() {
  return "hi";
}
sayHi();

function add(a, b) {
  return a + b;
}
add(5, 10);

function getName() {
  return "Name";
}
getName();

function multiply(x, y) {
  return x * y;
}
multiply(2, 3);

function greetPerson(name) {
  return `Hello ${name}`;
}
greetPerson("Ava");

// Export one of the repaired functions as the default
export default sayHi;
