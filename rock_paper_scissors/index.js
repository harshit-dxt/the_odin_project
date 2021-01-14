function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay(){
    let selection = ['rock', 'paper', 'scissors']
    return selection[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection){

}

console.log("Let's see what luck you have!")
for(let i = 0; i < 5; ++i){
    
    console.log("Rock, Paper, Scissors!")
    console.log("Rock, Paper, Scissors!")
    const computerSelection = computerPlay()
    console.log("I made my choice. Enter yours to see if you won!")
    const playerSelection = window.prompt();
    playRound(playerSelection, computerSelection);
}