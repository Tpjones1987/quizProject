let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");

  quizCards.forEach((card) => {
    card.classList.add("hide");
  });

  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);

  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);

    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");

    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);

  options.forEach((element) => {
    element.disabled = true;
  });
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";

      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
    }
  })
);

let countdown;

const quizArray = [
  {
    id: "1",
    question: "What is the name of the first level in Goldeneye 007?",
    options: [
      "Byelomorye Dam",
      "Chemical Warfare Facility",
      "Soviet Missile Silo",
      "Cuban Jungle",
    ],
    correct: "Byelomorye Dam",
  },
  {
    id: "2",
    question: "What nationality is Call of Duty character, Soap McTavish?",
    options: ["Russian", "English", "Scottish", "French"],
    correct: "Scottish",
  },
  {
    id: "3",
    question: "Which God confronts Kratos at the end of God of War(2018)?",
    options: ["Poseidon", "Athena", "Odin", "Thor"],
    correct: "Thor",
  },
  {
    id: "4",
    question: "What is the name of John Marston’s wife in Red Dead Redemption?",
    options: ["Abigail", "Bonnie", "Mary-Beth", "Karen"],
    correct: "Abigail",
  },
  {
    id: "5",
    question:
      "Mortal Kombat fighter Sub-Zero has been the grandmaster of what clan?",
    options: ["Lin Kuei", "White Lotus", "Shirai Ryu", "Forces of Light"],
    correct: "Lin Kuei",
  },
  {
    id: "6",
    question: "What drug stops Solid Snake from shaking while aiming?",
    options: ["Noctocyanin", "Pentazemin", "Wolbachia", "Antidote"],
    correct: "Pentazemin",
  },
  {
    id: "7",
    question:
      "Who can you give Korok Seeds to in The Legend of Zelda Breath of the Wild?",
    options: ["Daruk", "Ganon", "Mipha", "Hetsu"],
    correct: "Hetsu",
  },
  {
    id: "8",
    question: "How many Chaos Emeralds are there in Sonic the Hedgehog 3?",
    options: ["5", "3", "7", "9"],
    correct: "7",
  },
  {
    id: "9",
    question: "What item is needed to save the game in Resident Evil?",
    options: ["MO Disk", "Slide Filter", "Battery", "Ink Ribbons"],
    correct: "Ink Ribbons",
  },
  {
    id: "10",
    question: "What beings do the Locust use to sink cities in Gears of War 2?",
    options: ["Tickers", "Riftworm", "Reaver", "Berserker"],
    correct: "Riftworm",
  },
];
