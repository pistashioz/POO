
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
let cars = [
    {
        type: "Fiat",
        model: "500",
        year: 2015
    },
    {
        type: "corolla",
        model: "200",
        year: 2001
    }
];
let electricCar = [];


cars.push(new Car(type, model, year));

console.log(Car)

