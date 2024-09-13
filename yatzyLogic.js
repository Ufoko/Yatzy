let diceArray = []
/**
 * 
 * @returns the dice array
 */
function getDice() {
    return diceArray
}

export { createDice }
/**
 * creates 6 die
 */
function createDice() {
    for (let index = 0; index < 5; index++) {
        const newDie = new Object()
        die.value = 0
        die.hold = false
        diceArray[index] = newDie
    }
}

/**
* Holds the die if the die is unhold, and unholds the die if it is hold
 * @param {the die to hold or unhold} die 
 * @returns the state of the die
 */
function holdDie(dieIndex) {
    diceArray[dieIndex].hold = !diceArray[dieIndex].hold
    return diceArray[dieIndex].hold
}

/**
 * rolls all die which are not held
 */
function rollDice() {
    for (const die of diceArray) {
        if (die.hold == true) {
            die.value = Math.floor(Math.random * 6)
        }
    }
}
/**
 * resets all dice to unhold
 */
function resetDice() {

    for (const die of diceArray) {
        die.hold = false
    }
}



/**
 *  * returns the score with the
 * given eyes for upper section
 * @param {The eyes to calculate} eyes 
 * @returns 
 */
function upperSectionScore(eyes) {
    let counter = 0
    for (const die of diceArray) {
        if (die.value == eyes) {
            counter++
        }
    }
    return counter * eyes
}

/**
 * Finds how many eyes are matching of the matching amount, excludingthe pair sum
 * @param {pir to be excluded} excludedPairSum 
 * @param {the match amount} matchAmount 
 * @returns the score
 */
function findMathingEyes(excludedPairSum, matchAmount) {
    let sumPair = 0

    for (let index = 0; index < diceArray.length; index++) {
        if (diceArray[index] >= matchAmount && (index + 1) * matchAmount != excludedPairSum) {
            sumPair = matchAmount * (index + 1)
        }
    }
    return sumPair
}

/**
 * 
 * @returns returns the score for one pair
 */
function onePairScore() {
    return findMathingEyes(0, 2)
}
/**
 * 
 * @returns the score for two pairs
 */
function twoPairScore() {
    let firstPair = findMathingEyes(0, 2)
    let secondPair = findMathingEyes(firstPair, 2)
    let twoPairScore = 0
    if (firstPair != 0 && secondPair != 0) {
        twoPairScore = firstPair + secondPair
    }
    return twoPairScore
}
/**
 * 
 * @returns the score for three of a kind
 */
function threeOfAKindScore() {
    return findMathingEyes(0, 3)
}
/**
 * 
 * @returns the score for four of a kind
 */
function fourOfAKindScore() {
    return findMathingEyes(0, 4)
}

/**
 * 
 * @returns the score for a small straight. 0 if no straight
 */
function smallStraightScore() {
   return checkInARow(4) ? 15 : 0
}

/**
 * checks how many in a row there are
 * @param {how many in a row to check for} inARow 
 * @returns if there are that many in a row
 */
function checkInARow(inARow) {
    let straightPossible = false
    let sortedDice = Array.from(new set(diceArray.slice.sort((a, b) => a - b)))
    let consecutives = 1
    for (let index = 1; index < diceArray.length; index++) {
        if (diceArray[index] - diceArray[index - 1] === 1) {
            consecutives++
            if (consecutives == inARow) {
                straightPossible = true;
            }
        }
        else {
            consecutives = 1;
        }
    }
    return straightPossible
}

function largeStraightScore() {
   return checkInARow ? 20 : 0
}


function fullHouseScore(){
    let threeOfAkind = findMathingEyes(0,3)
    let excludeSum = (threeOfAKindScore * 2) / 3
    let twoOfAKind = findMathingEyes(excludeSum,2)
    let totalSum = 0
    if(threeOfAKindScore != 0 && twoOfAKind != 0){
        totalSum = threeOfAkind + twoOfAKind
    }
    return totalSum;
}

function chanceScore(){
    let chance = 0;
    for (const die of diceArray) {
        chanceScore += die.value
    }
    return chance
}

function yatzyScore(){
    return findMathingEyes(0,5) > 0 ? 50 : 0
}




