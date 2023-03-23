let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};
multiplyNumeric(menu)

function multiplyNumeric(obj){
    for (let prop in obj){
        if (typeof obj[prop] == 'number'){
            obj[prop] = obj[prop] * 2

        }
    }
    console.log(obj)
}

