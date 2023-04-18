gessList = ['00-CC-00', '01-CC-01', '00-CC-03', '04-CC-04', '05-CC-05', '06-CC-06', '07-CC-07', '08-CC-08', '09-CC-09'];
parkList = [];
const resposta = prompt('deseja gerir os movimentos dos carros? ')
const lotacaoMaxima = prompt('Indique a lotacao maxima do parque: ');

const matricula = prompt('Indique a matricula');
const movimento = prompt('Indique o tipo de movimento: ');

function parkValidator(matricula, movimento){
        if (gessList.some((car) => car === matricula)){
            if (movimento === 'Entrada'){
                if (parkList.length < lotacaoMaxima){
                    if (parkList.some((car) => car === matricula)){
                        return false
                    }
                    return true
                }
                return false
            }
            else if (movimento === 'Saida'){
                if (parkList.some((car) => car === matricula)){
                    return true
                }
                return false
            }
            return false   
        }
        return false
    }


parkValidator(matricula, movimento);

function parkManager(matricula, movimento){
    let entradasTotais = 0;
    if (movimento === 'Entrada'){
        entradasTotais += 1;
        parkList.push(matricula);
    }
    else if (movimento === 'Saida'){
        const index = parkList.indexOf(matricula);
        parkList.splice(index, 1);
    }
    console.log(parkList);
    alert(`Entratam ${entradasTotais} carros`);
    
}
if (parkValidator(matricula, movimento) === true){
    parkManager(matricula, movimento);
}
else{
    alert('O movimento nao é possivel')
}