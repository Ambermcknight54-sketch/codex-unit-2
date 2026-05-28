// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
const form = document.getElementById("sample-form");
const out = document.getElementById("data");
form.onsubmit = handleSubmit;

function handleSubmit(e) {
  event.preventDefault();
  const data = {
    username: form.elements.value,
    email: form.elements.value,
  };
  out.innerText = JSON.stringify(data, null, 2);
}
