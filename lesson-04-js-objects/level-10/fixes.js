// TODO: Fix common object errors (typos, undefined checks, unnamed functions) and export the fixed value/object.
// This starter intentionally assigns an anonymous function to an object property.
// Your task: give the function a name, then attach the named function to the object.

// Buggy starter (anonymous function assigned):
const user = { name: "Ava" };
// 1. Define the function with a name
function say() {
  return "hello " + user.name;
}

// 2. Attach the named function to the object
user.say = say;

// 3. Export the fixed object
export default user;
