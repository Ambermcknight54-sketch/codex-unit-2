// TODO: Fix common object errors (typos, undefined checks, unnamed functions) and export the fixed value/object.
// This starter intentionally assigns an anonymous function to an object property.
// Your task: give the function a name, then attach the named function to the object.

// Buggy starter (anonymous function assigned):
const user = { name: "Ava" };
user.say = ???;

export default user;

function () {
  return "hello " + user.name;
};