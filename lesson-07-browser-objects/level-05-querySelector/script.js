// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')
// TODO: log previous content and update nodes (iterate NodeList with forEach)

// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
// 1. Select all elements with the class 'item'
const list = document.querySelectorAll(".item");

// 2. Loop through the NodeList and update each element
list.forEach((el, i) => {
  console.log(`Original text for item ${i}:`, el.innerText);

  // Update the text to include the index
  el.innerText = `Updated Item ${i + 1}`;
});

// 3. Optional: Use querySelector to change the paragraph text
const p = document.querySelector("p");
if (p) {
  p.innerText = "The list above has been batch-updated!";
}
