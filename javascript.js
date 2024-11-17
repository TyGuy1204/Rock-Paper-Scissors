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
    
}