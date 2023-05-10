

class Car {
    #brand = ''
    #plate = ''
    #color = ''
    #currentTank = 0
    #maxTank = 0
    #consumption = 0
    #fuelType = ''
    
    constructor(brand, plate, color, currentTank, maxTank, fuelType, consumption){
        this.#brand = brand
        this.#plate = plate
        this.#color = color
        this.#currentTank = currentTank
        this.#maxTank = maxTank
        this.#fuelType = fuelType
        this.#consumption = consumption
    }

    get brand(){
        return this.#brand;
    }

    get plate(){
        return this.#plate;
    }

    get color(){
        return this.#color;
    }

    set plate(value){
        return this.#plate(value);
    }
    get maxTank(){
        return this.#maxTank;
    }
    get currentTank(){
        return this.#currentTank;
    }
    get consumption(){
        return this.#consumption;
    }
    get fuelType(){
        return this.#fuelType
    }
    set currentTank(value){
        let tempValue = 0
        if (value > this.#maxTank){
            this.#maxTank = tempValue;
        }
        if (value < 0){
            tempValue = 0;
        }

        this.#currentTank = tempValue;
    }

    set consumption(value){
        if (value > 0){
            this.#consumption = value;
        }
        else{
            this.#consumption = 0;
        }
    }

    set fuelType(value){
        let tempValue = value;
        if (tempValue !== 'Gasoline' && tempValue !== 'Diesel') {
            tempValue = 'Gasoline';
          }
        this.#fuelType = tempValue;
    }
    fillTank(amount){
        return this.currentTank += amount;
    }

    calculateConsumption(km){
        const usedFuel = (km * this.#consumption) / 100;
        this.#currentTank -= usedFuel;   
    }
};


const car1 = new Car('Ford', '91-GH-15', 'Green', 40, 60, 5, 'Diesel');
const car2 = new Car('Opel', '23-AB-23', 'White', 50, 55, 6.5, 'Gasoline');
const car3 = new Car('Nissan', '12-CX-45', 'Black', 22, 70, 4.5, 'Diesel');


const cars = [car1, car2, car3];

console.log(car1.calculateConsumption(12));
console.log(car2.fillTank(15));

function numCars(brand){
    return cars.filter((car) => car.brand === brand).length;
}

console.log('numbers of cars branded Nissan: ', numCars('Nissan'));

function getSumFuelType(fuelType){
    return cars
        .filter((car) => car.fuelType === fuelType)
        .reduce((acc, car) => acc + car.currentTank, 0);
}

console.log('sum of the current fuel of all cars that use diesel: ', getSumFuelType('Diesel'))