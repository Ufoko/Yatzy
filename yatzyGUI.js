import { assignResult, bonus, getNextCount, getNextTurn, getResults, nextTurn, results, startUp, sum, takenThisRound, totalScore } from './gamestate.js'
import { createDice, holdDie, rollDice, getDice, getDieState, resetDice } from './yatzyLogic.js'

/**
 * List of options in the game
 */
let options = [
    "1-s", "2-s", "3-s", "4-s", "5-s", "6-s", "One Pair", "Two Pairs",
    "Three Same", "Four Same", "Full House",
    "Small Staight", "Large Straight", "Chance", "Yatzy"
]


createDice()
setOnClick()

startUp()

function setOnClick() {
    /**
     * Die buttons
     */
    const dieButton0 = document.querySelector("#die0")
    const dieButton1 = document.querySelector("#die1")
    const dieButton2 = document.querySelector("#die2")
    const dieButton3 = document.querySelector("#die3")
    const dieButton4 = document.querySelector("#die4")
    dieButton0.onclick = () => holdDieGUI(0)
    dieButton1.onclick = () => holdDieGUI(1)
    dieButton2.onclick = () => holdDieGUI(2)
    dieButton3.onclick = () => holdDieGUI(3)
    dieButton4.onclick = () => holdDieGUI(4)
}

/**
 * Roll button
 */
const rollButton = document.querySelector("#roll")
rollButton.onclick = () => rollTheDice()

function rollTheDice() {
    rollDice()
    let dieArray = getDice()
    for (let i = 0; i < dieArray.length; i++) {
        if (!getDieState(i)) {
            let dieString = '<img id="die' + i + '" class="die" src="img\\dice-' + dieArray[i].value + '.svg" alt="dice' + (dieArray[i].value + 1) + '"></img>'
            let dieImage = document.querySelector("#die" + i)
            dieImage.outerHTML = dieString
        }
    }
    setOnClick()
    updateResults()
    updateCount()
}

const combinationDiv = document.getElementById('combinations')

/* TODO Eventuelt smid det ud i to seperate koloner, så der er plads på mindre skærme. Eller reducer størrelse af både knapperne og teksten*/
let combinations = '<table>';
for (let i = 0; i < options.length; i++) {
    combinations += '<tr><td>' + options[i] + ': </td><td>' + '<button id="button' + i + '"';
    combinations += 'class="result-button">';
    combinations += '</button>'
    if (i == 4) {
        combinations += '</td><td>Sum</td><td><button id="buttonSum" class="result-button"></button></td></tr>'
    } else if (i == 5) {
        combinations += '</td><td>Bonus</td><td><button id="buttonBonus" class="result-button"></button></td></tr>'
    }
}

combinations += "</table>";
combinationDiv.innerHTML = combinations

for (let i = 0; i < options.length; i++) {
    let resultButton = document.querySelector('#button' + i);
    resultButton.onclick = function () {
        let succeed = assignResult(i);
        if (succeed) {
            resultButton.className = "result-button-clicked";
        }
    }
}

function updateDices() {
    let diceArray = getDice()
    for (let i = 0; i < diceArray.length; i++) {
        if (i == 1) {

        }
    }
}

const turnHeader = document.querySelector("h2")

newTurn()

const roundButton = document.querySelector("#next-round")
roundButton.onclick = () => newTurn()

function allTaken() {
    const resultArray = results
    let allTakenBoolean = true
    for (let index = 0; index < resultArray.length; index++) {
        if (!resultArray[index].taken) {
            allTakenBoolean = false
        }
        
    }
    return allTakenBoolean
}

function newTurn() {
    if (allTaken()) {
        let resultDiv = document.querySelector('#result')
        resultDiv.innerHTML = "Game over. You got a score of: " + totalScore()
    } else if (takenThisRound()) {
        turnHeader.innerHTML = "Turn " + getNextTurn();
        let rollsLeft = document.querySelector("#rolls-left");
        rollsLeft.innerHTML = 3;
        nextTurn();
        rollButton.disabled = false;
        document.querySelector("#total").innerHTML = totalScore();
        resetDice();
        rollTheDice()
    } else {
        alert("DU SKAL VÆLGE NOGET DIT KVA")
    }
}

function updateCount() {
    let count = getNextCount();
    if (count == 1) {
        rollButton.disabled = true;
    }
    let rollsLeft = document.querySelector("#rolls-left")
    rollsLeft.innerHTML = count - 1;
}

function updateResults() {
    let resultArray = getResults()
    for (let index = 0; index < resultArray.length; index++) {
        document.querySelector("#button" + index).innerHTML = resultArray[index].value
    }
    document.querySelector("#buttonSum").innerHTML = sum();
    document.querySelector("#buttonBonus").innerHTML = bonus()

}

function holdDieGUI(number) {
    holdDie(number)
    let dieImage = document.querySelector("#die" + number)
    let newClass = (getDieState(number)) ? "die-clicked" : "die";
    dieImage.className = newClass;
}