// TODO: Use querySelector('#content') to select element and update innerHTML to explain querySelector vs getElementById
// 1. Target the element using a modern CSS selector string
const element = document.querySelector("#content");
console.log("before:", element.innerHTML);
element.innerHTML =
  "<strong>querySelector</strong> accepts any CSS selector string (#id, .class, tag) and returns the first match. <strong>getElementById</strong> only looks up elements by their literal ID string and is highly optimized for performance and clarity.";

debugger;
