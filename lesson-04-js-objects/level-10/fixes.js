// TODO: Fix common object errors (typos, undefined checks, unnamed functions) and export the fixed value/object.
// This starter intentionally assigns an anonymous function to an object property.
// Your task: give the function a name, then attach the named function to the object.

const user = {
  profile: {
    username: "Ava",
  },
  preferences: {
    theme: "dark",
  },
};
const activeName = user.profile ? user.profile.username : "Guest";
function greet() {
  return "Hello " + (user.profile ? user.profile.username : "Guest");
}

// Attach the named function to the object as a method
user.greet = greet;

export default user;
