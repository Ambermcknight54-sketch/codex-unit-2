// TODO: Select the form and log form.id, form.name, form.elements.length, form.enctype, form.className
// Example starter:
// const form = document.getElementById('sample-form');
// console.log(form.id, form.name);
// 1. Target the form element using a clean camelCase string selector matching the DOM ID
const form = document.querySelector("#sampleForm");

// 2. Extract and save the specific form metadata parameters into descriptive variables
const formId = form.id;
const formName = form.name;
const formElementsCount = form.elements.length;
const formEncodingType = form.enctype;
const formClassName = form.className;

// 3. Log each saved variable to the developer tools console
console.log(formId, "Form ID:");
console.log(formName, "Form Name:");
console.log(formElementsCount, "Elements Count:");
console.log(formEncodingType, "Encoding Type:");
console.log(formClassName, "CSS Class Name:");

// 4. Pause script execution to inspect the raw form node object components interactively
debugger;
