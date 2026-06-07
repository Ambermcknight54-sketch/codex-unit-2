// TODO: Select element with getElementById('content'), log previous innerHTML, then set new innerHTML.
// Keep changes simple and avoid inserting untrusted markup.
// 1. Target the element using getElementById('content') into a variable
const element = document.getElementById("content");

// 2. Log previous innerHTML
console.log("Previous innerHTML content:", element.innerHTML);

// 3. Set element.innerHTML to HTML that explains 'innerHTML' and 'innerText'
element.innerHTML = `<strong>innerHTML vs innerText:</strong>
<p>innerHTML parses strings as HTML markup, allowing you to add tags like strong or em. In contrast, innerText handles content strictly as plain, visible text and won't render any HTML tags.</p>`;

// 4. Use the debugger to inspect the element

