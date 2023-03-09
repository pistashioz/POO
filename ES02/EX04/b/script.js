function isPerfect(number){
    let sum = 0;
    for (var i = 1; i < number; i++){
        if (number % i == 0){
            sum += i;
        }
    }
    if (sum == number){
        return true
    }
    else{
        return false
    }

};

let number = parseInt(prompt('add a number'));
isPerfect(number)

if (isPerfect(number) == true){
    console.log('is a perfect number');
}
else{
    console.log('is not a perfect number')
}