// TODO: Build a small form handler that reads values, conditionally resets the form, and updates the output element.
// Keep logic small and focused for the challenge.
// 1. Select the form element from the DOM
const form = document.querySelector("#sample-form");
const output = document.querySelector("#out");

form.onsubmit = function (event) {
  event.preventDefault();

  const one = form.elements.one.value;
  const two = form.elements.two.value;

  output.innerText = one + " " + two;

  if (one && two) {
    form.reset();
  }
};
