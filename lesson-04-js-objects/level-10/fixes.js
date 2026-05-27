// TODO: Fix common object errors (typos, undefined checks, unnamed functions) and export the fixed value/object.
// This starter intentionally assigns an anonymous function to an object property.
// Your task: give the function a name, then attach the named function to the object.

// Buggy starter (anonymous function assigned):
const user = { name: "Ava" };
// 1. Declare the function with a specific name
function sayHello() {
  return "hello " + user.name;
}
// 2. Attach the named function to the object method property
user.say = sayHello;
export default user;
