let questions = [];
let currentQuestion = 0;
let currentQuestionData = {};
let score = 0;

const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
startBtn.addEventListener("click", function (){
    startBtn.style.display = "none";

    fetch("../questions_data/questions.json")
        .then(response => response.json())
        .then(data => {
            questions = shuffle(data).slice(0, 10);
            showQuestion();
    });
});

function showQuestion(){
    const q = questions[currentQuestion];

    quizContainer.innerHTML = `
        <h2>${q.question}</h2>
    
        <button onclick="checkAnswer('A')">${q.A}</button>
        <button onclick="checkAnswer('B')">${q.B}</button>
        <button onclick="checkAnswer('C')">${q.C}</button>
        <button onclick="checkAnswer('D')">${q.D}</button>
        
        
    `;
    currentQuestionData = questions[currentQuestion];
}

function checkAnswer(selected){
    if (selected === currentQuestionData.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion === questions.length){
        sessionStorage.setItem("score", score);
        fetch("../php/save_score.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({score: score})
    }).then(() =>
        window.location.href = '../html_files/results.html');
    } else {
        showQuestion();
    }
}

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


