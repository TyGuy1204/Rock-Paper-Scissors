let humanScore  = 0;
let computerScore  = 0;

const player_pick = document.querySelector("#player-pick");
const computer_pick = document.querySelector("#computer-pick");
const player_score  = document.querySelector("#player-score");
const computer_score = document.querySelector("#computer-score");
const round_result  = document.querySelector("#round-result");
const pick_container  = document.querySelector("#picks-container");
const results_container  = document.querySelector("#results-container");


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
        round_result.textContent = "Round Result: Its a tie! Try again.";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        round_result.textContent = "You win! Rock beats Scissors.";
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        round_result.textContent = "Round Result: You lose! Rock beats Scissors.";
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        round_result.textContent = "Round Result: You lose! Paper beats Rock.";
        computerScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        round_result.textContent = "Round Result: You win! Paper beats Rock.";
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        round_result.textContent = "Round Result: You win! Scissors beats Paper.";
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        round_result.textContent = "Round Result: You lose! Scissors beats Paper.";
        computerScore++;
    }
    player_score.textContent = "Human Score: " + humanScore;
    computer_score.textContent = "Computer Score: " + computerScore;
}

const buttons  = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id,getComputerChoice());
        pick_container.style.cssText  = "font-family: 'Monaco',sans-serif; font-size: 20px; color: #003135;border-radius: 8px;border : 1px solid #0FA4AF;padding: 10px 20px; background-color: #024950;";
        results_container.style.cssText  = "font-family: 'Monaco',sans-serif; font-size: 20px; color: #003135;border-radius: 8px;border : 1px solid #0FA4AF;padding: 10px 20px; background-color: #024950;";
    });
});