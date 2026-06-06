// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
const form = document.getElementById("sample-form");
const out = document.getElementById("data");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data ={
   username = form.elements.username.value,
   email = form.elements.email.value,
  
  };

 const out = document.getElementById("data"),
}
