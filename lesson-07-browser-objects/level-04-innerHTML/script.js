// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value

// Scaffold:
// const el = document.getElementById('content');
// console.log('before innerHTML:', el && el.innerHTML);
// // TODO: el.innerHTML = '<strong>New content</strong>';
// console.log('after innerHTML:', el && el.innerHTML);
1. Select the element
const el = document.getElementById('content');

// 2. Log previous innerHTML (this will include the <strong> tags)
console.log('before innerHTML:', el && el.innerHTML);

// 3. Set a small markup string
if (el) {
    el.innerHTML = 'Updated content with <em>emphasized</em> text!';
}

// 4. Log the after value
console.log('after innerHTML:', el && el.innerHTML);