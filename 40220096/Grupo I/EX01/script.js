//Victoria Valentina da Costa Martinez N° 40220096
const array1 = [1, 3, 2];
const array2 = [5, 4, 3];

function concatenateArrays(array1, array2){
    array1.forEach(function(element){
        if (!array2.includes(element)){
            array2.push(element)
        }
    })
    return console.log(array2.sort((a, b) => a - b));
}

const novoArray = concatenateArrays(array1, array2);