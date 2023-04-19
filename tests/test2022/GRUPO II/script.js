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
        <td><button id = 'btn' onclick="tipoMovimento()')">ENTRAR</button></td>
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
    const btn = document.getElemensById("btn");
    btn.addEventListener("click",function(){
        btn.textContent = 'SAIR'
    });
}

tipoMovimento()
