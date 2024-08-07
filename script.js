const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('quiz');
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.answers.map((answer, index) => `
            <button class="btn btn-light answer-btn" data-index="${index}">${answer}</button>
        `).join('')}
    `;
}

function showFeedback(isCorrect) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerHTML = isCorrect ? "Correct!" : "Wrong answer. Try again!";
}

document.getElementById('quiz').addEventListener('click', (e) => {
    if (e.target.classList.contains('answer-btn')) {
        const selectedAnswerIndex = parseInt(e.target.getAttribute('data-index'));
        const isCorrect = selectedAnswerIndex === questions[currentQuestionIndex].correct;
        showFeedback(isCorrect);
    }
});

document.getElementById('next').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('feedback').innerHTML = '';
    } else {
        document.getElementById('quiz').innerHTML = "<h2>Quiz Completed!</h2>";
        document.getElementById('next').style.display = 'none';
    }
});

// Initialize the quiz
showQuestion();