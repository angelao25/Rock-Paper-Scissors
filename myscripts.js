console.log("Hello World");

function getComputerChoice()
{
  let game = ["Rock", "Paper", "Scissors"];
  let randomItem = game[Math.floor(Math.random() * game.length)];
  console.log("Showing the random computer choice generated");
  console.log(randomItem);
  return randomItem;
}

function playRound(playerSelection, computerSelection)
{
  if ( playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper")
  {
    return "Loser";
  }

  else if (playerSelection.toLowerCase() ==="rock" && computerSelection.toLowerCase() === "scissors")
  {
    return "Winner";
  }
  
  else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toLowerCase() === "rock")
  {
    return "Winner";
  }

  else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toLowerCase() === "scissors")
  {
    return "Loser";
  }

  else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")
  {
    return "Loser";
  }

  else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")
  {
    return "Winner";
  }  

  return 0;
}

function game() 
{
  let p1score = 0;
  let p2score = 0;
  let message = "Choose one: Rock, Paper or Scissors";
  console.log("Beggining our 5 round game");
  for (let i = 0; i < 5; i++)
  {
    let userChoice = prompt(message);
    let compSelect = getComputerChoice();

    if (userChoice.toLowerCase() === compSelect.toLowerCase())
    {
      i --;
      console.log("Unlucky, you both chose the same hehe");
    }

    else 
    {
      let result =  playRound(userChoice, compSelect);
      result = result.toString();

    
      if (result.toLowerCase() === "winner")
      {
        p1score++;
        console.log("You won");
      }
      else 
      {
        p2score++;
        console.log("You lost");
      }
    }
    
  }
  
  if ( p1score > p2score )
  {
    console.log("It was a win");    
  }
  else
  {
    console.log("It was a lose");
  }
  
}

const greeting="Hello, welcome to the game Rock, Paper Scissors";

console.log(greeting);

const playerSelection = "rock";
const computerSelection = getComputerChoice();

game(); 

console.log(playRound(playerSelection, computerSelection));


/* let confirm = "yes";
do
{

  if (getComputerChoice() === "Rock")
  {
    console.log("Its a Rock boy");
  }

  if (getComputerChoice() ==="Paper")
  {
    console.log("It's Paper boy");
  }

  if (getComputerChoice() === "Scissors")
  {
    console.log("It's Scissorsss");
  }

  
}while(confirm === "yes" || confirm === "y");
*/ 

