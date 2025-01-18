// Select DOM Elements
const welcomeScreen = document.getElementById("welcomeScreen");
const quizArea = document.getElementById("quizArea");
const resultScreen = document.getElementById("resultScreen");
const timerText = document.getElementById("timer");

// Data for Levels and Questions
const levels = [
    "₹ 1,000,000", "₹ 5,00,000", "₹ 2,50,000", "₹ 1,25,000",
    "₹ 64,000", "₹ 32,000", "₹ 16,000", "₹ 8,000",
    "₹ 4,000", "₹ 2,000", "₹ 1,000", "₹ 500",
    "₹ 300", "₹ 200", "₹ 100"
];
const questions = [
    {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        answer: 1
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: 1
    }
];

// Game State Variables
let currentLevelIndex = levels.length - 1;
let currentQuestionIndex = 0;
let winningAmount = "₹ 0";
let timeLeft = 30;
let timerInterval;

// Start Game
function startGame() {
    const username = document.getElementById("username").value.trim();
    const error = document.getElementById("usernameError");

    if (!username) {
        error.textContent = "Please enter your username.";
        return;
    }

    error.textContent = "";
    welcomeScreen.classList.add("hide");
    quizArea.classList.remove("hide");
    initializeGame();
}

// Initialize Levels and Questions
function initializeGame() {
    loadLevels();
    loadQuestion();
}

// Load Levels
function loadLevels() {
    const levelList = document.getElementById("levelList");
    levelList.innerHTML = "";

    levels.forEach((level, index) => {
        const levelElement = document.createElement("li");
        levelElement.className = "level";
        levelElement.innerHTML = `
            <span class="levelNumber">${levels.length - index}</span>
            <span class="levelAmount">${level}</span>
        `;
        if (currentLevelIndex === index) {
            levelElement.classList.add("active");
        }
        levelList.appendChild(levelElement);
    });
}

// Load Question
function loadQuestion() {
    const questionStatement = document.getElementById("questionStatement");
    const answersContainer = document.getElementById("answers");
    const currentQuestion = questions[currentQuestionIndex];

    // Set question and options
    questionStatement.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const answerElement = document.createElement("div");
        answerElement.className = "answer";
        answerElement.textContent = option;
        answerElement.addEventListener("click", () => checkAnswer(index));
        answersContainer.appendChild(answerElement);
    });

    // Start Timer
    resetTimer();
}

// Reset Timer
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    timerInterval = setInterval(updateTimer, 1000);
}

// Update Timer
function updateTimer() {
    timerText.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        endGame(false);
    }
    timeLeft--;
}

// Check Answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the answer is correct
    if (selectedIndex !== currentQuestion.answer) {
        endGame(false);
        return;
    }

    // Move to the next question and level
    winningAmount = levels[currentLevelIndex];
    currentLevelIndex--;
    currentQuestionIndex++;
    clearInterval(timerInterval);

    if (currentLevelIndex < 0 || currentQuestionIndex >= questions.length) {
        endGame(true);
        return;
    }

    loadLevels();
    loadQuestion();
}

// End Game
function endGame(userWon) {
    const priceMoney = document.getElementById("priceMoney");
    const message = document.getElementById("message");

    if (userWon) {
        priceMoney.textContent = `You won: ${levels[0]}`;
        message.textContent = "Congratulations!";
    } else {
        priceMoney.textContent = `You won: ${winningAmount}`;
        message.textContent = "Better luck next time!";
    }

    quizArea.classList.add("hide");
    resultScreen.classList.remove("hide");
}
