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
    console.log(humanChoice);
    console.log(computerChoice);
    if(humanChoice === computerChoice){
        console.log("Its a tie! Try again.");
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors.");
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors.");
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock.");
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock.");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper.");
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);