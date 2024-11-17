let humanScore  = 0;
let computerScore  = 0;

function getComputerChoice(){
    let choice  = Math.floor(Math.random() * 3)+1;
    if(choice == 1){
        return "rock";
    }
    else if(choice == 2){
        return "paper";
    }
    else if(choice == 3){
        return "scissors";
    }
}
function getHumanChoice(){
    let choice  = prompt("Choose rock/paper/scissors");
    if(choice.toLowerCase() === "rock"){
        return "rock";
    }
    else if(choice.toLowerCase() === "paper"){
        return "paper";
    }
    else if(choice.toLowerCase() === "scissors"){
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    console.log("Your choice: "+humanChoice);
    console.log("Computer choice: "+computerChoice);
    if(humanChoice === computerChoice){
        console.log("Its a tie! Try again.");
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}


function playGame(){
    for(let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    console.log("Final Score:\nHuman Score: " + humanScore + "\nComputer Score: "+computerScore);
}

playGame();
