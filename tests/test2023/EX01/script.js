numbers = [1, 2, 3, 4, 5];


function manipulateNumbers(numbers, operation){
    if (operation == 'square'){
        return console.log(numbers.map(x => x**2))
    }
    else if (operation == 'cube'){
        return console.log(numbers.map(x => x**3))
    }
    else if (operation == 'sqrt'){
        return console.log(numbers.map(x => x**0.5))
    }
    else{
        console.log('operation not valid')
    }
}

const square = manipulateNumbers(numbers, 'square');
const cubes = manipulateNumbers(numbers, 'cube')
const roots = manipulateNumbers(numbers, 'sqrt')