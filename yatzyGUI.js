import { createDice,holdDie,rollDice,getDice } from './yatzyLogic.js'

/**
 * List of options in the game
 */
let options = [
   "1-s","2-s","3-s","5-s","6-s","Sum","Bonus","One Pair","Two Pairs",
   "Three Same","Four Same","Full House",
   "Small Staight","Large Straight","Chance","Yatzy" 
]

createDice()


/**
 * Die buttons
 */
const dieButton0 = document.querySelector("#die0")
const dieButton1 = document.querySelector("#die1")
const dieButton2 = document.querySelector("#die2")
const dieButton3 = document.querySelector("#die3")
const dieButton4 = document.querySelector("#die4")
dieButton0.onclick = () => holdDie(0)
dieButton1.onclick = () => holdDie(1)
dieButton2.onclick = () => holdDie(2)
dieButton3.onclick = () => holdDie(3)
dieButton4.onclick = () => holdDie(4)

/**
 * Roll button
 */
const rollButton = document.querySelector("#roll")
rollButton.onclick = () => rollTheDice()

function rollTheDice() {
    rollDice()
    let dieArray = getDice()
    for (let i = 0; i < dieArray.length; i++) {
        let dieString = '<img id="die' + i + '" class="die" src="img\\dice-' + (dieArray[i].value + 1) + '.svg" alt="dice' + (dieArray[i].value + 1) + '"></img>'
        let dieImage = document.querySelector("#die" + i)
        dieImage.outerHTML = dieString
    }
}




const combinationDiv = document.getElementById('combinations')


/* TODO Eventuelt smid det ud i to seperate koloner, så der er plads på mindre skærme. Eller reducer størrelse af både knapperne og teksten*/
let combinations = '<table>';
for (let i = 0; i < options.length; i++) {
    combinations += '<tr><td>' + options[i] + ': </td><td>' + '<button id="button' + i + '" class="result-button"> </button> </td></tr>'
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

