function getComputerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let randomChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return randomChoice;
}



function playRound(event) {
    let computerSelection = getComputerChoice();
    let playerSelection = event.target.id;
    console.log(playerSelection);
    
    if((playerSelection === "rock") && (computerSelection === "scissors")){
        
        return "you won ! rock beats scissors";
    }
    else if((playerSelection === "rock") && (computerSelection === "paper")){
        return result = "you lose ! paper beats rock";
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return result = "you won ! scissors beats paper";
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return result = "you lose ! rock beats scissors";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return result = "you won ! paper beats rock";
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return result = "you lose ! scissors beats paper";
    }
    else if((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return result = "you tied";
    }
}

// listen to user selection and get reslut
const btns = Array.from(document.querySelectorAll('button'));
let result;
let playerPoints = 0;
let computerPoints = 0;
let round = 0;

btns.forEach(btn => btn.addEventListener("click", function(event) {
    // remove game result and reset player & computer scores after five rounds
    if(document.getElementById("game-result")){
        let element = document.getElementById("game-result");
        element.remove();
        playerPoints = 0;
        computerPoints = 0;
    }
    // remove previous round result  
    if(document.getElementById("round-result")){
        let element = document.getElementById("round-result");
        element.remove();
    }


    // show each round result
    result = playRound(event);
    console.log(result);
    
    const body = document.querySelector("body");
    const div = document.createElement("div");
    body.appendChild(div);
    div.setAttribute("id", "round-result");
    div.textContent = `ROUND ${round + 1}: ${result}`;
    
    if((result === "you won ! rock beats scissors") || (result === "you won ! scissors beats paper") || (result === "you won ! paper beats rock")){
        playerPoints++;
    } else if((result === "you lose ! paper beats rock") || (result === "you lose ! rock beats scissors") || (result === "you lose ! scissors beats paper")){
        computerPoints++;
    }
    round++;
    // display player and computer score
    let playerScore = document.querySelector("#player-points");
    playerScore.textContent = playerPoints;

    let computerScore = document.querySelector("#computer-points");
    computerScore.textContent = computerPoints;

    // console.log(playerPoints);
    // console.log(computerPoints);

    // reset to round "0" and show game result after five rounds
    if(playerPoints === 5 || computerPoints === 5){
        round = 0;
        const body = document.querySelector("body");
        const div = document.createElement("div");
        body.appendChild(div);
        div.setAttribute("id", "game-result");
        if(playerPoints > computerPoints) {
            div.textContent = "you won the game";
            // console.log("END OF THE GAME YOU WON");
            
        } else if(playerPoints < computerPoints){
            div.textContent = "you lost the game";
            // console.log("END OF THE GAME YOU LOST");
        } else if(playerPoints === computerPoints){
            div.textContent = "game tied with computer";
            // console.log("END OF THE GAME YOU TIED WITH COMPUTER");
        } 
    }
}));
// console.log("reslut is " + result);




// function game() {
//     let playerPoints = 0;
//     let computerPoints = 0;
//     let round;
//     for (let x = 1; x <= 5; x++) {
//         playerSelection = prompt("enter your choce");
//         let lowPlayerSelection = playerSelection.toLowerCase();
//         round = playRound(lowPlayerSelection, getComputerChoice());
//         console.log(round);
//         if((round === "you won ! rock beats scissors") || (round === "you won ! scissors beats paper") || (round === "you won ! paper beats rock")){
//             playerPoints++;
//         } else if((round === "you lose ! paper beats rock") || (round === "you lose ! rock beats scissors") || (round === "you lose ! scissors beats paper")){
//             computerPoints++;
//         }
//     }
//     if(playerPoints > computerPoints) {
//         return "you won the game";
//     } else if(playerPoints < computerPoints){
//         return "you lost the game";
//     } else if(playerPoints === computerPoints){
//         return "game tied";
//     }
    
// }
// console.log(game());