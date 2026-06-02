// TODO: Use querySelector('#content') to select element and update innerHTML to explain querySelector vs getElementById
// 1. Target the element using a modern CSS selector string
// 1. 🛠️ TASK: Target the element using querySelector('#content') into a variable
// 1. Target the element using querySelector('#content') into a variable
// 1. Target the element using querySelector('#content') into a variable
const element = document.querySelector("#content");

// 2. Log the previous innerHTML value before updating it
console.log("Previous innerHTML content:", element.innerHTML);

// 3. Set element.innerHTML to explain querySelector vs getElementById using a template literal
element.innerHTML = `querySelector vs getElementById:

querySelector is highly flexible, allowing you to use any valid CSS selector style like classes, IDs, or element chains.

getElementById can only look up elements by their exact ID string, making it more restrictive but slightly faster for dedicated ID queries.`;

/* 4. Use the debugger to inspect the element live.
   This breakpoint will temporarily pause your browser's execution engine. 
   Open your Developer Tools (F12) to hover over and inspect the element node properties! */
debugger;
