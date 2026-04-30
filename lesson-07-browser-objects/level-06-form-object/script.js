// Level 06 — form-object starter
// TODO: select the form element (e.g. document.getElementById('sample-form'))
// TODO: log form.id, form.name, form.elements.length, form.enctype, form.className

// Scaffold:
// const form = document.getElementById('sample-form');
// if (form) {
//   console.log('id:', form.id);
//   console.log('name:', form.name);
//   console.log('elements length:', form.elements.length);
//   console.log('enctype:', form.enctype);
//   console.log('className:', form.className);
// }
const form = document.getElementById("sample-form");

// 2. Log the required metadata properties
if (form) {
  console.log("ID:", form.id);
  console.log("Name:", form.name);
  console.log("Elements Count:", form.elements.length);
  console.log("Method:", form.method);
  console.log("Action:", form.action);
  console.log("Encoding Type:", form.enctype);
  console.log("Class Name:", form.className);
}
