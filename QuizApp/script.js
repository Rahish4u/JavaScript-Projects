const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2,
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1,
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Python", "C++", "JavaScript", "Java"],
      correct: 2,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Computer Style Sheets",
      ],
      correct: 1,
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hyperlink Markup Language",
        "Home Tool Markup Language",
        "Hyperlink Text Machine Language",
      ],
      correct: 0,
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "1993"],
      correct: 1,
    },
    {
      question: "Which is not a programming language?",
      options: ["HTML", "Python", "Java", "C++"],
      correct: 0,
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2,
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correct: 2,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Claude Monet",
      ],
      correct: 1,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreBox = document.getElementById("score-box");
  const quizBox = document.getElementById("quiz-box");
  const finalScoreEl = document.getElementById("final-score");
  const restartBtn = document.getElementById("restart-btn");
  
  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = "";
  
    currentQuiz.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () => selectAnswer(li, index));
      optionsEl.appendChild(li);
    });
  
    nextBtn.disabled = true;
  }
  
  function selectAnswer(selectedOption, index) {
    const correctIndex = quizData[currentQuestion].correct;
  
    if (index === correctIndex) {
      selectedOption.classList.add("correct");
      score++;
    } else {
      selectedOption.classList.add("incorrect");
    }
  
    Array.from(optionsEl.children).forEach((child, idx) => {
      if (idx !== index && idx === correctIndex) {
        child.classList.add("correct");
      }
      child.style.pointerEvents = "none";
    });
  
    nextBtn.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    quizBox.classList.add("hidden");
    scoreBox.classList.remove("hidden");
    finalScoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizBox.classList.remove("hidden");
    scoreBox.classList.add("hidden");
    loadQuestion();
  }
  
  nextBtn.addEventListener("click", nextQuestion);
  restartBtn.addEventListener("click", restartQuiz);
  
  loadQuestion();
  