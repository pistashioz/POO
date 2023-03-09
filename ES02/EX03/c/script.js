function prime(number){
    if (number == 1){
        console.log('eh')
    }
    else if (number > 1){
        for (let i = 2; i < number; i++){
            if (number % i == 0){
                console.log('not prime')
            }
            else{
                console.log('is prime')
            }
        }
    }
    else{
        console.log('must have to be greater than 1')
    }
}

const number = parseInt(prompt('add a number: '));
prime(number)