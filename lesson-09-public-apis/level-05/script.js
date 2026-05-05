const triviaForm = document.getElementById("trivia-form");
const questionEl = document.getElementById("question");

if (triviaForm) {
  triviaForm.addEventListener("submit", async (e) => {
    // Reset UI while loading
    questionEl.textContent = "Fetching question...";

    try {
      // 1. Build query params from the form (e.g., amount=1)
      const formData = new FormData(e.target);
      const params = new URLSearchParams(formData);

      // 2. Fetch the data using the constructed query string
      const response = await fetch(
        `https://the-trivia-api.com/v2/questions?${params.toString()}`,
      );

      if (!response.ok) throw new Error("Failed to fetch trivia");

      // 3. Parse JSON response
      const result = await response.json();

      // 4. Render the first question text
      // result is an array, so we pick the first item
      questionEl.textContent = result.question.text;
    } catch (err) {
      questionEl.textContent =
        "Error: Could not retrieve trivia. Please try again.";
      console.error(err);
    }
  });
}
