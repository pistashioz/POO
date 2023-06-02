//private properties, set and gets

class developer {
    username = ''
    #age = 0
    #ageInYears = 0
    _color = ''

    constructor(username, age, color){
        this.username = username
        this.#age = age
        this.#ageInYears = this.#getAge()
        this._color = color
    }
    get log(){
        
        return `${this.username} ${this.#age}, ${this.#ageInYears}, ${this._color}`
    }

    get fullInfo(){
        return `${this.username}, ${this.#age}, ${this.#ageInYears}, ${this._color}`
    }
    set fullInfo(value){
        const data = value.split(' ');
        this.username = data[0];
        this.#age = data[1];
        this._color = data[2];
    }

    //private function
    #getAge(){
        return this.#age * 8
    }
}
//getters => access properties
//setters => change (mutate) them
const yoyi = new developer('yoyi', 19, 'blue');
console.log(yoyi)
console.log(yoyi._color)
console.log(yoyi.log)

developer.fullInfo = 'victoria 20 blue'
console.log(developer.fullInfo)

const person = {
    firstName: 'victoria',
    lastName: 'martinez',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
};

person.fullName = 'ulala yes'
console.log(person)