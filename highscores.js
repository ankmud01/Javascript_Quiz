const username = document.getElementById("username");
const submitScoreBtn = document.getElementById("submitbtn");
const finalScore = document.getElementById("finalScore");
const recentScore = localStorage.getItem("recentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    submitScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();
};