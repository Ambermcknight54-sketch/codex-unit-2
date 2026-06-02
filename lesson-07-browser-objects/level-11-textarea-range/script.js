const sampleForm = document.querySelector("#sample-form");

// 2. Define the form submission event handler
function handleSubmit(event) {
  // 🛠️ TASK: Call preventDefault at handler start to stop the page from refreshing
  event.preventDefault();

  // 🛠️ TASK: Save form via event.target
  const form = event.target;

  // 🛠️ TASK: Save form.elements.message.value into message
  const message = form.elements.message.value;

  // 🛠️ TASK: Save form.elements.volume.value into volume and convert with Number()
  // Browser range inputs return strings (e.g., "50"), so explicit conversion is required.
  const volume = Number(form.elements.volume.value);

  // 🛠️ TASK: Console.log both values
  console.log("Message:", message);
  console.log("Volume:", volume);
}
