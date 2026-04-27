// TODO: Declare named functions then assign them as methods on the exported object.
// Example:
// function greet(name) { return 'Hi ' + name }
// const user = { name: 'Ava' }
// user.greet = greet
// export default user
const user = {
  "Ava"
};

export default user;
// 1. Declare the named function
function greet(name) {
  return 'Hi ' + name;
}

// 2. Create the object
const user = {
  name: "Ava"
};

// 3. Attach the function as a method
user.greet = greet;

// 4. Export the object
export default user;