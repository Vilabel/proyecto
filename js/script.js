const questions = [
    {
        question: "¿En qué año nació el Beato José Ferrer Esteve?",
        options: ["1904", "1912", "1898", "1920"],
        answer: 0
    },
    {
        question: "¿Qué cargo ejerció en Albarracín desde 1934?",
        options: ["Rector del Colegio", "Maestro de Novicios", "Director de Catequesis", "Bibliotecario"],
        answer: 1
    },
    {
        question: "¿En qué año fue beatificado por el Papa San Juan Pablo II?",
        options: ["1985", "2000", "1995", "1990"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const nextBtn = document.getElementById("btn-next");
const scoreEl = document.getElementById("quiz-score");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    scoreEl.textContent = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = opt;
        btn.onclick = () => selectOption(index, btn);
        optionsEl.appendChild(btn);
    });
}

function selectOption(selectedIndex, selectedBtn) {
    const correctIndex = questions[currentQuestion].answer;
    const buttons = optionsEl.querySelectorAll(".option-btn");

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIndex) btn.classList.add("correct");
    });

    if (selectedIndex === correctIndex) {
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    nextBtn.style.display = "none";
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.textContent = "¡Has completado la trivia!";
    optionsEl.innerHTML = "";
    scoreEl.innerHTML = `<strong>Tu puntaje: ${score} de ${questions.length} respuestas correctas.</strong>`;
}

// Inicializar
loadQuestion();