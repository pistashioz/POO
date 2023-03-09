let rand  = Math.floor(Math.random() * 100) + 1;
let num = prompt('indique um numero do 1 ao 100: ');
let tentativas = 0;
while (tentativas < 10){
    if (num < rand){
        console.log('MAIOR');
        tentativas += 1
        return
    }
    else if (num > rand){
        console.log('MENOR');
        tentativas += 1
        return
    }
    else{
        console.log('ACERTOU');
        break
    }
}
console.log('NUMERO DE TENTATIVAS ESGOTADAS')
