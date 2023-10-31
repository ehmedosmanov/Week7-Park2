const handBtn = document.querySelector("#hand");
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const chosenBox = document.querySelector(".table-chosen");
let chosedId;
let yourScore;
let botScore;
let isComputerMode = false;
let is2PlayerMode = false;

let arr = ["rock", "hand", "scissors"];

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

rockBtn.addEventListener("click", (e) => {
  chosedId = 0;
    let botChosed = getRandom(arr)
    console.log(bot);
  chosenBox.innerHTML = 
     `
    <p class="bot">Bot Chosed: ${botChosed}</p>
    <p class="you">You Chosed: Rock</p>
    <p class="animate-charcter">Bot Win</p>
    `;
});


function comparePlayer(you,bot) {
    if(you !== bot) {

    }
}