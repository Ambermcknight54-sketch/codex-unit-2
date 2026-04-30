// Level 12 — radio-checkbox starter
// TODO: in submit handler read radio via form.elements.color.value and checkbox via form.elements.subscribe.checked

function handleSubmit() {
  // event.preventDefault();
  // const form = event.target;
  // TODO: const color = form.elements.color.value;
  // TODO: const subscribe = form.elements.subscribe.checked;
  console.log("radio & checkbox scaffold");
}
function handleSubmit(event) {
  // 1. Prevent page reload
  event.preventDefault();

  // 2. Reference the form
  const form = event.target;

  // 3. Extract values using the specific properties
  const selectedColor = form.elements.color.value; // Grabs "red" or "green"
  const isSubscribed = form.elements.subscribe.checked; // Returns true or false

  // 4. Log or display the results
  console.log(`Color selected: ${selectedColor}`);
  console.log(`Subscription status: ${isSubscribed}`);

  // Optional: Provide feedback to the user
  alert(
    `You chose ${selectedColor} and subscription is ${isSubscribed ? "ON" : "OFF"}.`,
  );
}

// 5. Attach the event listener
const form = document.getElementById("sample-form");
if (form) {
  form.addEventListener("submit", handleSubmit);
}
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
