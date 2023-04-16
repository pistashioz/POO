const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

function sumSalaries(obj){
    let sum = 0
    if (obj.length === 0){
        alert(sum)
    }
    for (key in obj){
        sum += obj[key]
    }
    alert(sum)
}

sumSalaries(salaries)