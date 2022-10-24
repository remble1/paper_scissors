const btnPaper = document.getElementById("paper");
const btnRock = document.getElementById("rock");
const btnScissors = document.getElementById("scissors");
const btnCheck = document.getElementById("check");

const divInfo = document.getElementById("info");
const divHumanScore = document.getElementById("humanScore");
const divCompScore = document.getElementById("compScore");

const compChooseList = ["paper", "rock", "scissors"];
let humanChoose = "";
let compChoose = "";
let humanScore = 0;
let compScore = 0;

divHumanScore.textContent = "Twój wynik to: 0 pkt.";
divCompScore.textContent = "Wynik kompa to: 0 pkt.";

const numberRandom = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return Math.floor(number);
};

const humanWin = () => {
  divInfo.textContent = "Punkt dla Ciebie";
  humanScore = humanScore + 1;
  divHumanScore.textContent = `Twój wynik to: ${humanScore} pkt.`;
};
const compWin = () => {
  divInfo.textContent = "Punkt dla kompa";
  compScore = compScore + 1;
  divCompScore.textContent = `Wynik kompa to: ${compScore} pkt.`;
};

btnPaper.onclick = () => {
  humanChoose = "paper";
};
btnRock.onclick = () => {
  humanChoose = "rock";
};
btnScissors.onclick = () => {
  humanChoose = "scissors";
};
btnCheck.onclick = () => {
  compChoose = compChooseList[numberRandom(0, 3)];

  if (humanChoose == compChoose) {
    divInfo.textContent = "Remis";
    humanChoose == "";
  }
  if (humanChoose == "rock" && compChoose == "paper") {
    compWin();
    humanChoose == "";
  }
  if (humanChoose == "paper" && compChoose == "rock") {
    humanWin();
    humanChoose == "";
  }

  if (humanChoose == "scissors" && compChoose == "rock") {
    compWin();
    humanChoose == "";
  }
  if (humanChoose == "rock" && compChoose == "scissors") {
    humanWin();
    humanChoose == "";
  }

  if (humanChoose == "paper" && compChoose == "scissors") {
    compWin();
    humanChoose == "";
  }
  if (humanChoose == "scissors" && compChoose == "paper") {
    humanWin();
    humanChoose == "";
  }
  if (humanChoose == "") {
    divInfo.textContent = "Wybierz coś debilu";
  }
};
