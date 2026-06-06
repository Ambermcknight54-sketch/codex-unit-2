const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const category = form.elements.category.value;
  const difficulty = form.elements.difficulty.value;
  const data = { category, difficulty };
}
const queryString = new URLSearchParams(data);
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const category = form.elements.category.value;
  const difficulty = form.elements.difficulty.value;
  const data = { category, difficulty };

  const queryString = new URLSearchParams(data);
  const response = await fetch(
    "https://the-trivia-api.com/v2/questions?" + queryString,
  );

  const result = await response.json();
  const quesion = result[0].question.text;
  console.log(quesion);
  const outTag = document.querySelector("#out");
  outTag.innerHTML = "<h3>" + question + "</h3>";
}
