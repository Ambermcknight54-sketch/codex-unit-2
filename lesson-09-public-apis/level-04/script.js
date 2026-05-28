const formTag = document.getElementById("queryForm");
formTag.onsubmit = eventHandler;

formTag.onsubmit = function (event) {
  event.preventDefault();

  const form = event.target;

  // 1. Read values from form elements
  const category = form.elements.category.value;
  const difficulty = form.elements.difficulty.value;
  const data = { category, difficulty };

  // 3. Use URLSearchParams to convert data into a safely encoded query string
  const params = new URLSearchParams(data);
  const query = params.toString();

  // 4. Log the query string output
  console.log("Generated query string:", query);
};
