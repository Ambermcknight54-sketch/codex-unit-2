const questionEl6 = document.getElementById("question");
const choicesEl6 = document.getElementById("choices");
const feedbackEl6 = document.getElementById("feedback");

// TODO: fetch a question, extract correct & incorrect answers, shuffle them
// TODO: render choices as accessible buttons and wire click handlers
// TODO: show feedback on selection and provide retry/next controls
async function fetchAndRender() {
  // Clear previous state
  questionEl6.textContent = "Loading...";
  choicesEl6.innerHTML = "";
  feedbackEl6.textContent = "";

  try {
    const response = await fetch("https://the-trivia-api.com/v2/questions");
    const data = await response.json();
    const q = data;

    // 1. Process and shuffle answers
    const allAnswers = [...q.incorrectAnswers, q.correctAnswer];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    // 2. Render the question
    questionEl6.textContent = q.question.text;

    // 3. Render choices as buttons
    shuffledAnswers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.textContent = answer;

      btn.addEventListener("click", () => {
        // Disable all buttons so user can't change answer
        Array.from(choicesEl6.children).forEach((b) => (b.disabled = true));

        // Check if correct
        if (answer === q.correctAnswer) {
          feedbackEl6.textContent = "Correct! 🎉";
        } else {
          feedbackEl6.textContent = `Incorrect! The answer was: ${q.correctAnswer}`;
        }
      });

      choicesEl6.appendChild(btn);
    });
  } catch (err) {
    questionEl6.textContent = "Failed to load question.";
    console.error(err);
  }
}

// Start the game
fetchAndRender();
