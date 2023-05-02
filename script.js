function getComputerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let randomChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return randomChoice;
}
getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock") && (computerSelection === "scissors")){
        return "you won ! rock beats scissors";
    }
    else if((playerSelection === "rock") && (computerSelection === "paper")){
        return "you lose ! paper beats rock";
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "you won ! scissors beats paper";
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "you lose ! rock beats scissors";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return "you won ! paper beats rock";
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "you lose ! scissors beats paper";
    }
    else if((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "you tied";
    }
}

let playerSelection;

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let round;
    playerSelection = prompt("enter your choce");
    round = playRound(playerSelection, getComputerChoice());
    console.log(round);
    if(round === "you won ! rock beats scissors"){
        playerPoints++;
    } else if(round === "you lose ! paper beats rock"){
        computerPoints++;
    }
    
    playerSelection = prompt("enter your choce");
    round = playRound(playerSelection, getComputerChoice());
    console.log(round);
    if(round === "you won ! rock beats scissors"){
        playerPoints++;
    } else if(round === "you lose ! paper beats rock"){
        computerPoints++;
    }

    playerSelection = prompt("enter your choce");
    round = playRound(playerSelection, getComputerChoice());
    console.log(round);
    if(round === "you won ! rock beats scissors"){
        playerPoints++;
    } else if(round === "you lose ! paper beats rock"){
        computerPoints++;
    }

    playerSelection = prompt("enter your choce");
    round = playRound(playerSelection, getComputerChoice());
    console.log(round);
    if(round === "you won ! rock beats scissors"){
        playerPoints++;
    } else if(round === "you lose ! paper beats rock"){
        computerPoints++;
    }

    playerSelection = prompt("enter your choce");
    round = playRound(playerSelection, getComputerChoice());
    console.log(round);
    if((round === "you won ! rock beats scissors") || (round === "you won ! scissors beats paper") || (round === "you won ! paper beats rock")){
        playerPoints++;
    } else if((round === "you lose ! paper beats rock") || (round === "you lose ! rock beats scissors") || (round === "you lose ! scissors beats paper")){
        computerPoints++;
    }
    if(playerPoints > computerPoints) {
        return "you won the game";
    }else if(playerPoints < computerPoints ) {
        return "computer won the game";
    } 
    else if(playerPoints === computerPoints) {
        return "game tied";
    } 
}
console.log(game());