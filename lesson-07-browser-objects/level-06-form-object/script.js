// TODO: Select the form and log form.id, form.name, form.elements.length, form.enctype, form.className
// Example starter:
// const form = document.getElementById('sample-form');
// console.log(form.id, form.name);
// 1. Target the form element using a clean camelCase string selector matching the DOM ID
const form = document.querySelector("#sampleForm");
const formId = form.id;
const formName = form.name;
const formElementsCount = form.elements.length;
const formEncodingType = form.enctype;
const formClassName = form.className;

console.log(formId, "Form ID:");
console.log(formName, "Form Name:");
console.log(formElementsCount, "Elements Count:");
console.log(formEncodingType, "Encoding Type:");
console.log(formClassName, "CSS Class Name:");

debugger;
