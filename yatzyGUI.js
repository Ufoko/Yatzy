import { bonus, getResults, startUp, sum, totalScore } from './gamestate.js'
import { createDice, holdDie, rollDice, getDice, getDieState } from './yatzyLogic.js'

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

}

function updateResults(){
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


const combinationDiv = document.getElementById('combinations')


/* TODO Eventuelt smid det ud i to seperate koloner, så der er plads på mindre skærme. Eller reducer størrelse af både knapperne og teksten*/
let combinations = '<table>';
for (let i = 0; i < options.length; i++) {
    if (i == 5) {
        combinations += '<tr><td>' + options[i] + ': </td><td>' + '<button id="button' + i +
            '" class="result-button"> </button> </td><td>Sum</td><td><button id="buttonSum" class="result-button"></button></td><td>Bonus</td><td><button id="buttonBonus" class="result-button"></button></td></tr>'
    } else {
        combinations += '<tr><td>' + options[i] + ': </td><td>' + '<button id="button' + i + '" class="result-button"> </button> </td></tr>'
    }
}
combinations += "</table>";
combinationDiv.innerHTML = combinations

function updateDices() {
    let diceArray = getDice()
    for (let i = 0; i < diceArray.length; i++) {
        if (i == 1) {

        }
    }
}

