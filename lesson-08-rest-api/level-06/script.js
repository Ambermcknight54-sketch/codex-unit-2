// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
const form = document.getElementById("sample-form");
const out = document.getElementById("data");

function handleSubmit(e) {
  e.preventDefault();
  // TODO: build a `data` object from form.elements using indexes (e.g. form.elements[0].value)
  // Example display: out.innerText = JSON.stringify(data, null, 2);
// Collect values using indices:
  // form.elements is the first input (Username)
  // form.elements is the second input (Email)
  const data = {
    username: form.elements.value,
    email: form.elements.value
  };

  // Display the object in the <pre> tag
  out.innerText = JSON.stringify(data, null, 2);
}
}

if (form) form.onsubmit = handleSubmit;
