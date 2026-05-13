let questions = [];
let currentQuestion = 0;
let currentQuestionData = {};
let score = 0;
let timerInterval = null;
let timeLeft = 10;

const quizContainer = document.getElementById("quizContainer");

document.addEventListener("DOMContentLoaded", function () {
    fetch("../questions_data/questions.json")
        .then(response => response.json())
        .then(data => {
            questions = shuffle(data).slice(0, 10);
            showQuestion();
        });
});

function showQuestion() {
    clearInterval(timerInterval);
    timeLeft = 10;

    const q = questions[currentQuestion];

    quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    <p id="timerText" style="grid-column: span 2; text-align: center;">⏱ ${timeLeft}s</p>
    <button onclick="checkAnswer('A')">${q.A}</button>
    <button onclick="checkAnswer('B')">${q.B}</button>
    <button onclick="checkAnswer('C')">${q.C}</button>
    <button onclick="checkAnswer('D')">${q.D}</button>
`;

    currentQuestionData = questions[currentQuestion];
    startTimer();
}

function startTimer() {
    const text = document.getElementById("timerText");

    timerInterval = setInterval(() => {
        timeLeft--;
        text.innerHTML = `⏱ ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            checkAnswer(null);
        }
    }, 1000);
}

function checkAnswer(selected) {
    clearInterval(timerInterval);

    if (selected === currentQuestionData.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion === questions.length) {
        sessionStorage.setItem("score", score);
        fetch("../php/save_score.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ score: score })
        }).then(() =>
            window.location.href = '../html_files/results.html'
        );
    } else {
        showQuestion();
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}