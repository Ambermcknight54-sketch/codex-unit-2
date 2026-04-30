// Level 03 — innerText starter
// TODO: select an element (e.g. document.getElementById('desc'))
// TODO: console.log the previous innerText, set a new innerText, then log the new value

// Scaffold:
// const el = document.getElementById('desc');
// console.log('before:', el && el.innerText);
// // TODO: set el.innerText = '...';
// console.log('after:', el && el.innerText);
1. Select.the.element
const el = document.getElementById('desc');

// 2. Log the previous innerText
console.log('before:', el && el.innerText);

// 3. Set a new descriptive innerText
if (el) {
    el.innerText = 'The text has been successfully updated using JavaScript!';
}

// 4. Log the new value
console.log('after:', el && el.innerText);