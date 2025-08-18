const form = document.getElementById("test-form");
const answersPath = "/curso_mecatronica/answers.json";

// Helper to get current document name (without extension)
function getDocumentName() {
    const path = window.location.pathname;
    const file = path.split("/").pop();
    return file.split(".")[0];
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    fetch(answersPath)
        .then(response => response.json())
        .then(answers => {
            const docName = getDocumentName();
            const docAnswers = answers[docName];
            if (!docAnswers) {
                alert("No answers found for this document.");
                return;
            }

            let result = {};
            let correctAnswers = 0; // Variable to count correct answers

            for (const q in docAnswers) {
                // Find the selected input for this question (by name)
                const selectedInput = form.querySelector(`input[name="${q}"]:checked`);
                const userAnswer = selectedInput ? selectedInput.value : null;
                result[q] = {
                    correct: docAnswers[q],
                    user: userAnswer
                };
                if (userAnswer === docAnswers[q]) {
                    correctAnswers++;
                }
            }

            alert("Respuestas correctas: " + correctAnswers);
        })
        .catch(() => {
            alert("Error loading answers.");
        });
});