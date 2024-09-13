
let bonusSum = 0

let results = []

function startUp() {
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
 * @param {The score to save} score 
 * @returns true on success, false on failure (e.g the result was already taken)
 */
function assignResult(index, score){
    if(results[index].taken != true){
        return false
    }
    results[index].value = score
    results[index].taken = true
    return true
}

function totalScore(){
    let totalScore = 0
    for (const result of results) {
        totalScore += result.value
    }
    return totalScore
}