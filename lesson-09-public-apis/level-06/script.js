const formTag = document.getElementById("queryForm");

formTag.onsubmit = async function (event) {
  event.preventDefault();

  const questionHeading = document.getElementById("questionPrompt");
  const displayA = document.getElementById("choiceA");
  const displayB = document.getElementById("choiceB");
  const displayC = document.getElementById("choiceC");
  const displayD = document.getElementById("choiceD");

  try {
    const response = await fetch("https://the-trivia-api.com/v2/questions");
    const result = await response.json();

    // 1. Navigate nested properties to isolate the single item string parameters
    const question = result.question.text;
    const correct = result.correctAnswer;
    const incorrect1 = result.incorrectAnswers;
    const incorrect2 = result.incorrectAnswers;
    const incorrect3 = result.incorrectAnswers;

    // 2. Render variables directly into structured DOM location tags safely
    questionHeading.innerText = question;
    displayA.innerText = `A) ${correct}`;
    displayB.innerText = `B) ${incorrect1}`;
    displayC.innerText = `C) ${incorrect2}`;
    displayD.innerText = `D) ${incorrect3}`;
  } catch (error) {
    console.error("Trivia data extraction breakdown:", error);
    questionHeading.innerText = "Failed to load trivia database questions.";
  }
};
