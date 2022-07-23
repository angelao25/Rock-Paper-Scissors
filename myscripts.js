//console.log("Hello World"); // Message that only appears in console

const playerScoreContainer = document.getElementById('player-score');
const computerScoreContainer = document.getElementById('cpu-score');
const playerSelectContainer = document.getElementById('player-choice');
const computerSelectContainer = document.getElementById('cpu-choice');
const results = document.getElementById('results');
const modal = document.getElementById('modal');
const winResults = document.getElementById('winner');

let p1Score = 0;
let cpuScore = 0;

playerScoreContainer.innerHTML = p1Score;
computerScoreContainer.innerHTML = cpuScore;

function getComputerChoice()
{
  let game = ["Rock", "Paper", "Scissors"];
  let randomItem = game[Math.floor(Math.random() * game.length)];
  console.log("Showing the random computer choice generated: " + randomItem);
  return randomItem;
}

function capitalizeFirstLetter(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection)
{
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toString();
    console.log("Showing the button selected: " + playerSelection);
    computerSelection = computerSelection.toString();
    playerSelectContainer.innerHTML = capitalizeFirstLetter(playerSelection);
    computerSelectContainer.innerHTML = capitalizeFirstLetter(computerSelection);

    if ( playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper")
    {
      cpuScore ++;
      
    }

    else if (playerSelection.toLowerCase() ==="rock" && computerSelection.toLowerCase() === "scissors")
    {
      p1Score ++;
      
    }
    
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toLowerCase() === "rock")
    {
      p1Score ++;
      
    }

    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toLowerCase() === "scissors")
    {
      cpuScore ++;
      
    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")
    {
      cpuScore ++;
      
    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")
    {
      p1Score ++;      
    }  

    else {
      console.log("Showing its a tie");      
    }
    playerScoreContainer.innerHTML = p1Score;
    computerScoreContainer.innerHTML = cpuScore;
    if (p1Score === 5) 
    {
      winResults.innerHTML = 'Well, who else could it be?';
    }

    else if (cpuScore === 5) 
    {
      winResults.innerHTML = 'Clearly, not you';
    }  

}

//Styling using JS in order to practice.

const buttons = document.querySelector("div");


const b1 = document.querySelector(".rock-btn");
b1.style.fontSize = '50px';
b1.style.backgroundColor = 'red';

const b2 = document.querySelector(".paper-btn");
b2.style.fontSize = '50px';

const b3 = document.querySelector(".scissors-btn"); 
b3.style.fontSize = '50px';
b3.style.backgroundColor = 'red';



//document.getElementById("bt1").addEventListener("click", playRound("rock", getComputerChoice));



//document.getElementById("div").addEventListener("click", playRound);


/* let confirm = "yes";
do
{

  if (getComputerChoice() === "Rock")
  {
    console.log("Its a Rock boy");
  }

  if (getComputerChoice() === "Paper")
  {
    console.log("It's Paper boy");
  }

  if (getComputerChoice() === "Scissors")
  {
    console.log("It's Scissorsss");
  }

  
}while(confirm === "yes" || confirm === "y");
*/ 

