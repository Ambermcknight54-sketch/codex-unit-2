// TODO: Build a small form handler that reads values, conditionally resets the form, and updates the output element.
// Keep logic small and focused for the challenge.
const operationalForm = document.querySelector("#sampleForm");

operationalForm.onsubmit = function (event) {
  event.preventDefault();

  const form = event.target;
  const primaryValue = form.elements.primaryInput.value;
  const secondaryValue = form.elements.secondaryInput.value;
  const responseOutput = document.querySelector("#out");

  if (primaryValue === "admin" || secondaryValue === "clear") {
    responseOutput.innerText = "Form cleared.";
    form.reset();
  } else {
    responseOutput.innerText = `Values: ${primaryValue}, ${secondaryValue}`;
  }
};
