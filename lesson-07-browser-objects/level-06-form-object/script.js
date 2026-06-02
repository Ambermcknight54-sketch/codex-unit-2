// TODO: Select the form and log form.id, form.name, form.elements.length, form.enctype, form.className
// Example starter:
// const form = document.getElementById('sample-form');
// console.log(form.id, form.name);
// 1. Target the form element using a clean camelCase string selector matching the DOM ID
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  // Prevent the default browser action (refreshing/reloading the page)
  event.preventDefault();
  // 2. 🛠️ TASK: Save form.id, form.name, form.elements.length, form.enctype, form.className
  const formId = form.id;
  const formName = form.name;
  const formElementsCount = form.elements.length;
  const formEncodingType = form.enctype;
  const formClassName = form.className;

  // 3. 🛠️ TASK: Log each saved variable
  console.log("Form ID:", formId); // "sample-form"
  console.log("Form Name:", formName); // "sampleForm"
  console.log("Form Elements Count:", formElementsCount); // 3 (includes two inputs and the button)
  console.log("Form Encoding Type:", formEncodingType); // Default is "application/x-www-form-urlencoded"
  console.log("Form Class Name:", formClassName); // "" (empty string since no class attribute exists)

  // 4. Extra tip: Inspect all mapped controls within the elements collection
  console.log("Inspecting all controls directly:", form.elements);

  /* 🛠️ TASK: Inspect form in the debugger
   This breakpoint pauses execution so you can open your browser DevTools (F12), 
   hover over the 'form' variable, and look at all its built-in properties live. */
  debugger;
}
