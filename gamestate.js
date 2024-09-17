import { chanceScore, fourOfAKindScore, fullHouseScore, largeStraightScore, onePairScore, smallStraightScore, threeOfAKindScore, twoPairScore, upperSectionScore, yatzyScore } from "./yatzyLogic.js"


export let results = []
let rollsLeft = 3
let turnCounter = 0;

export function rollCount() {
    rollsLeft--
    return rollsLeft
}

export function getNextTurn () {
    turnCounter++;
    return turnCounter;
}

export function getNextCount () {
    return rollsLeft--;
}

export function nextTurn () {
    rollsLeft = 3;
}

export function takenThisRound () {
    let takenCount = 0;
    for (const element of results) {
        takenCount += (element.taken) ? 1 : 0;
    }
    return takenCount == turnCounter;
}

export function getResults() {
    /* Kører de første 6 igennem, for at checke hvor mange af de individuelle der er ens*/
    for (let index = 0; index < 6; index++) {
        const element = results[index];
        element.value = (element.taken) ? element.value : upperSectionScore(index + 1);
    }
    results[6].value = (results[6].taken) ? results[6].value : onePairScore() 
    results[7].value = (results[7].taken) ? results[7].value : twoPairScore() 
    results[8].value = (results[8].taken) ? results[8].value : threeOfAKindScore() 
    results[9].value = (results[9].taken) ? results[9].value : fourOfAKindScore() 
    results[10].value = (results[10].taken) ? results[10].value : fullHouseScore() 
    results[11].value = (results[11].taken) ? results[11].value : smallStraightScore() 
    results[12].value = (results[12].taken) ? results[12].value : largeStraightScore() 
    results[13].value = (results[13].taken) ? results[13].value : chanceScore() 
    results[14].value = (results[14].taken) ? results[14].value : yatzyScore() 
    return results;
}

export function startUp() {
    for (let index = 0; index < 15; index++) {
        const result = new Object()
        result.value = 0;
        result.taken = false
        results[index] = result
    }
}
/**
 * Saves the given score in the index given if the given index is not already taken. 
 * @param {The index to put score into} index 
 * @returns true on success, false on failure (e.g the result was already taken)
 */
export function assignResult(index) {
    if (results[index].taken == true) {
        return false
    }
    results[index].taken = true
    return true
}

export function totalScore() {
    let totalScore = 0
    for (const result of results) {
        totalScore += (result.taken) ? result.value : 0;
    }
    return totalScore
}

export function bonus() {
    let singlesScore = sum();
    return singlesScore >= 63 ? 50 : 0
}

export function sum() {
    let singlesScore = 0
    for (let index = 0; index < 6; index++) {
        singlesScore += results[index].value
    }
    return singlesScore;
}