
function bmiCalc(){
    const weight = prompt('type your weight');
    const height = prompt('type yout height');

    let bmi = weight / (height**2)
    console.log(bmi)
}

bmiCalc()