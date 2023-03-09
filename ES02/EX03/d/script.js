function factorialize(number){
    if (number == 0){
        console.log(1)
    }
    else if (number >= 1){
        let factor = 1;
        for (let i =1; i <= number; i++){
            factor *= i;
        }
        console.log(factor);
    }
    else{
        console.log('add a number bigger than 0');
        number = parseInt(prompt('add a number: '));
    }
}

let number = parseInt(prompt('add a number: '));
factorialize(number)