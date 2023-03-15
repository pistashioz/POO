function showTabuada(number){
    console.log('Tabuada dos', number)
    for (let i = 0; i <= 10; i++){
       console.log(` ${ '1 x ' +  i + ' = ' +  Number(i) * Number(number)}`)
    }
};
showTabuada(7);

function numberCities(...args){
    alert(args.length);
    alert(args);
};

numberCities('Braga', 'Madrid', 'Aveiro', 'Funchal');

let palindromo = number =>{
    let number1 = String(number);
    let reversed = '';
    for (let i = number1.length-1; i>=0; i--){
        reversed+=number1[i]
    }
    if (number1 == reversed){
        return true
    }
    else{
        return false
    }
};

alert(palindromo(111));
alert(palindromo(112));
alert(palindromo(212))