
// Players Divs

let player1 = document.querySelector("#player1")
let player2 = document.querySelector("#player2")

let playerName1 = document.querySelector("#name1")
let playerName2 = document.querySelector("#name2")

// Dice
let dice = document.querySelector("img");

// CurrentScores box
let currentPointsPlayerOne = document.querySelector(".current-points0")
let currentPointsPlayerTwo = document.querySelector(".current-points1")

// Score of both players
let pointsPlayerOne = document.querySelector("#points1")
let pointsPlayerTwo = document.querySelector("#points2")




// Game Start
let gameAlive = true
let currentScore = 0
let scorePlayerOne = 0
let scorePlayerTwo = 0
let activePlayer = 0
player1.classList.toggle("active-player")

// Dice Images

let images = [
    "dice-1.png",
    "dice-2.png",
    "dice-3.png",
    "dice-4.png",
    "dice-5.png",
    "dice-6.png"];


function checkGame() {
    if(scorePlayerOne + currentScore >= 100) {
        gameAlive = false;
        player1.classList.toggle("winner");
        playerName1.classList.toggle("name-winner");
    } else if (scorePlayerTwo + currentScore >= 100) {
        gameAlive = false;
        player2.classList.toggle("winner");
        playerName2.classList.toggle("name-winner");
    }
}


// Switching Players and add styles
function switchPlayer() {
    player1.classList.toggle("active-player")
    player2.classList.toggle("active-player")
    if(activePlayer === 1) {
        activePlayer = 0
    } else if (activePlayer === 0){
        activePlayer = 1
    }
    console.log(activePlayer)
}


// Roll a dice function 
function roll() {
    // Random number(image) 1-6
    if(activePlayer === 0) {
    let numberDice = Math.floor(Math.random()*6);
    dice.setAttribute("src", images[numberDice]);
    // Adding to current box
    currentScore += numberDice + 1
    currentPointsPlayerOne.innerHTML = currentScore
    // If roll 1 on dice
    if(numberDice === 0) {
        currentScore = 0
        currentPointsPlayerOne.innerHTML = currentScore

        // Switch a player box and activePlayer
        switchPlayer()
    }
} else if(activePlayer === 1) {
    // Random number(image) 1-6
    let numberDice = Math.floor(Math.random()*6);
    dice.setAttribute("src", images[numberDice]);
    // Adding to current box
    currentScore += numberDice + 1
    currentPointsPlayerTwo.innerHTML = currentScore
    // If roll 1 on dice reset current point
    if(numberDice === 0) {
        currentScore = 0
        currentPointsPlayerTwo.innerHTML = currentScore
        // Switch a player box and activePlayer
        switchPlayer()
    }
}
}

// Hold button function

function hold() {   
    
    checkGame() 
    if(activePlayer === 0) {
    // Adding currentScore to allPoints    
    scorePlayerOne = currentScore + scorePlayerOne
    pointsPlayerOne.innerHTML = scorePlayerOne
    // Reseting currentScore
    currentScore = 0
    currentPointsPlayerOne.innerHTML = currentScore
    // Switch a player box and activePlayer
    switchPlayer()
} else if (activePlayer === 1) {
    // Adding currentScore to allPoints   
    scorePlayerTwo = currentScore + scorePlayerTwo
    pointsPlayerTwo.innerHTML = scorePlayerTwo
    // Reseting currentScore
    currentScore = 0
    currentPointsPlayerTwo.innerHTML = currentScore
    // Switch a player box and activePlayer
    
    switchPlayer()
    
}
}

function startAgain() {
    currentScore = 0
    scorePlayerOne = 0
    scorePlayerTwo = 0
    activePlayer = 0
    scorePlayerOne = currentScore;
    scorePlayerTwo = currentScore;
    currentPointsPlayerOne.innerHTML = currentScore
    pointsPlayerOne.innerHTML = scorePlayerOne
    currentPointsPlayerTwo.innerHTML = currentScore
    pointsPlayerTwo.innerHTML = scorePlayerTwo
    player1.classList.add("active-player")
    player2.classList.remove("active-player")
    player1.classList.remove("winner");
    playerName1.classList.remove("name-winner");
    player2.classList.remove("winner");
    playerName2.classList.remove("name-winner");
}


