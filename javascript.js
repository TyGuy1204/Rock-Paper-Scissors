let humanScore  = 0;
let computerScore  = 0;

const player_pick = document.querySelector("#player-pick");
const computer_pick = document.querySelector("#computer-pick");

console.log(player_pick);

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
    player_pick.textContent = "Your choice: " + humanChoice;
    computer_pick.textContent = "Computer choice: " + computerChoice;
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

const buttons  = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        playRound(button.id,getComputerChoice());
    });
});