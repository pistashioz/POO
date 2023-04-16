let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};
console.log(menu)

function multiplyNumeric(obj){
    for (const key in obj){
        if (typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu)
console.log(menu)
