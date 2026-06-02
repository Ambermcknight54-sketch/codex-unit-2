// TODO: Create a handleSubmit(event) function and assign it to form.onsubmit.
// Inside the handler, use console.log to explain `onsubmit`.
// Example starter:
// const form = document.getElementById('sample-form');
// function handleSubmit(event) { console.log('onsubmit handler'); }
// form.onsubmit = handleSubmit;
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  console.log(
    "onsubmit fires immediately when a user attempts to submit a form by buttons or entry events.",
  );
}
