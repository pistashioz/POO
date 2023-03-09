let num = prompt('indique um numero do 1 ao 100: ');

function guessNum(num){
    let rand  = Math.floor(Math.random() * 100) + 1;
    console.log(rand)
    let tentativas = 0;
    while (tentativas < 5){
        if (num < rand){
            alert('UP');
            num = prompt('indique um numero do 1 ao 100: ');
            tentativas += 1;
        }
        else if (num > rand){
            alert('DOWN');
            num = prompt('indique um numero do 1 ao 100: ');
            tentativas += 1;
        }
        else{
            alert('CONGRATULATIONS, YOU GUESSES IT!');
            break
        }
    }
    console.log('PATIENCE, PLEASE PLAY AGAIN!')

}

guessNum(num)
