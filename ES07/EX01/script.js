class Dice {
    #faceValue = [];
    #quantity = 0;
    constructor(){
        this.#faceValue = [1, 2, 3, 4, 5, 6];
        this.#quantity = 6;
    }
    get getQuantityFaces() {
        return this.#faceValue;
    }
    //methods
    getQuantityFaces(value){
        return this.#quantity = value;
    }
    roll(){
        const random = Math.floor(Math.random() * this.#quantity);
        return this.#faceValue[random];
    }
}

