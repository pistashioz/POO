//part one
const str = '';
let num = 0;
const bool = true;

console.log(typeof str, typeof num, typeof bool);

let i = 0;
let integrers = [1, 5, 9, 2]
for (let x = 0; x < integrers.length; x++){
    if (integrers[x] > i){
        i = integrers[x]
    }   
}
console.log(i)

let n1 = 1;
let n2 = 2;
let fibonacci = []
for (let i = 0; i <= 9; i++){
    fibonacci.push(n1)
    const n = n1 + n2;
    n1 = n2
    n2 = n;
}
console.log(fibonacci) 

const car = {type: 'Fiat',
    model:  '500',
    year: 2015,
    startEngine: function(){
        return this.type + " " + 2003
    },
    stopEngine: function(){
        return this.model + " " + this.year
    }
}

console.log(car.startEngine());

//part 2

class Car {
    type = ''
    model =  ''
    year = 0
    constructor(type, model, year){
        this.type = type
        this.model = model
        this.year = year
    }
    get sEngine(){
        return this.startEngine()
    }
    startEngine(){
        return this.type + " " + 2001
    }
    stopEngine(){
        return this.type + " " + 2016
    }
}

const carrito = new Car('Fiat', '500', 2015)
console.log(carrito)
console.log(carrito.sEngine)


class ElectricCar extends Car{
    batteryLevel = 0
    constructor(type, model, year, batteryLevel){
        super(type, model, year)
        this.batteryLevel = batteryLevel
    }
    get cBattery(){
        return this.chargeBattery()
    }
    chargeBattery(){
        return 100 - this.batteryLevel
    }
}
const carro = new ElectricCar('Zoe', '2000',  2017, 15)
console.log(carro.cBattery);

