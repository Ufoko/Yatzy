
import { assert } from "chai"
import { createDice, holdDie, resetDice, getDieState ,rollDice, getDice} from "../Yatzy/Yatzy/yatzyLogic.js"
describe('Yatzy die state', () => {
    before(() => {
        createDice();
        holdDie(0);
        holdDie(1);
        holdDie(4)
    });

    it('should return true when die 0 is held', () => {
        assert.equal(getDieState(0), true)
    });
    it('should return false when die 2 is not held', () => {
        assert.equal(getDieState(2), false)
    });
    describe('', () => {
        before(() => {
            resetDice();
        });

        it('should return false for die 0 after reset', () => {
            assert.equal(getDieState(0), false)
        });
        it('should return false for die 2 after reset', () => {
            assert.equal(getDieState(2), false)
        });


    });
});

describe('Dice roll test', () => {
        before(() => {
            createDice();
            rollDice();
    });
    it('Should not be 0 as the dice has been rolled', () => {
        for (const die of getDice()) {
         assert(die.value,!0)
        }
    });



});