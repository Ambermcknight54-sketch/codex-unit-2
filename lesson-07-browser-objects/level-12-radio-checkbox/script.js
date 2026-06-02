// Level 12 — radio-checkbox starter
// TODO: in submit handler read radio via form.elements.color.value and checkbox via form.elements.subscribe.checked

// const form = event.target;
// TODO: const color = form.elements.color.value;
// TODO: const subscribe = form.elements.subscribe.checked;
console.log("radio & checkbox scaffold");

// const form = document.getElementById('sample-form');
// const color = form.elements.color.value;
// const isSubscribed = form.elements.subscribe.checked;
// 1. Select the form element from the DOM
const sampleForm = document.querySelector("#sample-form");

// 2. Define the form submission event handler
function handleSubmit(event) {
  // 🛠️ TASK: Call preventDefault at handler start to stop the page from refreshing
  event.preventDefault();

  // 🛠️ TASK: Save form via event.target
  const form = event.target;

  // 🛠️ TASK: Save form.elements.color.value into color
  // For radio button groups, this retrieves the value string of the checked radio.
  const color = form.elements.color.value;

  // 🛠️ TASK: Save form.elements.subscribe.checked into isSubscribed
  // For checkboxes, this retrieves a true/false boolean representing its state.
  const isSubscribed = form.elements.subscribe.checked;

  // 🛠️ TASK: Console.log the extracted values
  console.log("Color Chosen:", color);
  console.log("Is Subscribed:", isSubscribed);

  /* Optional baseline step: Update the display-area element in the DOM 
     so you can see the result directly on the web page as well! */
  const displayArea = document.querySelector("#display-area");
  displayArea.innerText = `Color: ${color} | Subscribed: ${isSubscribed}`;
}

// 3. Bind the submit event of the form to our handler function
sampleForm.onsubmit = handleSubmit;
