const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;

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
  const question = result[0]?.question || "No question returned.";
  console.log(question);
  const outTag = document.querySelector("output");
  outTag.innerHTML = "<h3>" + question + "</h3>";
}
