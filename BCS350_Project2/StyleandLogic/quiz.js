let questions = [];
let currentQuestion = 0;

const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
startBtn.addEventListener("click", function (){
    startBtn.style.display = "none";

    fetch("../questions_data/questions.json")
        .then(response => response.json())
        .then(data => {
            questions = data;
            showQuestion();
    });

    function showQuestion(){
        const q = questions[currentQuestion];

        quizContainer.innerHTML = `
        <h2>${q.question}</h2>
    `;
    }
});


