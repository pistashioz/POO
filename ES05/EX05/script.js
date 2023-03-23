const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function totalSalaries(){
    let totalSalaries=0;
    for (let prop in salaries){
        totalSalaries+=salaries[prop];
    }
    console.log(totalSalaries)
    return totalSalaries;
}

totalSalaries()