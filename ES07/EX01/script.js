class Dice {
    #faceValue = 0
    #quantity = 6
    constructor(faceValue, quantity){
        this.#faceValue = faceValue
        this.#quantity = 6
    }
    get getQuantityFaces() {
        return this.#faceValue;
    }
}

const face1 = new Dice(1);
const face2 = new Dice(2);
const face3 = new Dice(3);
const face4 = new Dice(4);
const face5 = new Dice(5);
const face6 = new Dice(6);

console.log(diceValues.faceValue)

set 