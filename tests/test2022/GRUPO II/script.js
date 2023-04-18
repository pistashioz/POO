colaboradores = ['Rui', 'Maria', 'Joana', 'Beatriz', 'Pedro', 'Salomé', 'Iris', 'Vicente', 'Dinis', 'Ruben'];
formAdd = document.querySelector('form');


function percentage(){
    if (tipoMovimento === true){
        
    }
}
createTable()
function createTable(){
    let template = ''
    for (let colaborador of colaboradores){
        template +=  `<tr><td value = ${colaborador}>${colaborador}</td>
        <td><button class = 'btn' onclick="tipoMovimento()')">ENTRAR</button></td>
        </tr> `
    }
    tableBody.innerHTML = template;
}



formAdd.addEventListener('submit', function(){
    const novoColaborador = document.querySelector('#novosColaboradores').value;

    colaboradores.push(novoColaborador);
    createTable();
})

function tipoMovimento(){
    const btn = document.getElementsByClass("btn");
    btn.addEventListener("click", ()=>{

        if(btn.value === "SAIR"){
            btn.value = "ENTRAR";
            return true
        }else{
            btn.value= "SAIR";
            return false
        }
    })
}
