let playerScore = 0;
let cpuScore = 0;

const emoji = {
  rock: "✊",
  paper: "🖐",
  scissors: "✌️"
};

function play(playerChoice) {

  const choices = ["rock", "paper", "scissors"];
  const cpuChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("playerPick").innerText =
    "你：" + emoji[playerChoice];

  document.getElementById("cpuPick").innerText =
    "電腦：" + emoji[cpuChoice];

  let result = "";

  if (playerChoice === cpuChoice) {
    result = "平手 🤝";
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    result = "你贏了 🎉";
    playerScore++;
  } else {
    result = "你輸了 😭";
    cpuScore++;
  }

  document.getElementById("resultText").innerText = result;
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("cpuScore").innerText = cpuScore;
}