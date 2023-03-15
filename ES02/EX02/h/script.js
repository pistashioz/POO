let number = prompt('insert a number');

function multipTable(number){
    if (number == ''){5
        
        for (let i = 0; i <= 10; i++){
            console.log( ` ${'1 x ' +  i + ' = ' +  Number(i) * 1}`)
        }
    }
    else{
        for (let i = 0; i <= 10; i++){
            console.log(` ${'1 x ' +  i + ' = ' + Number(i) * Number(number)}`)
         }
    }
}

multipTable(number)

