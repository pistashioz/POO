//Victoria Valentina da Costa Martinez N° 40220096
const contactos = [];


const formAdd = document.querySelector('form');


function createTable(){
    let template = '';

    for (let contacto of contactos){
        template +=  `<tr><td value = ${contacto.nome}>${contacto.nome}</td>
        <td value = ${contacto.mail}>${contacto.mail}</td>
        <td value = ${contacto.telemovelt}>${contacto.telemovel}</td>
        <td><button onclick="editar('${contacto.mail}')">Editar</button>
        <button onclick="excluir('${contacto.mail}')">Excluir</button>
        <button onclick="selecionar()">Selecionar</button></td>
        </tr> `
       
    }
    tableBody.innerHTML = template;


}

formAdd.addEventListener('submit', function(event){
    event.preventDefault();

    const nomeContacto = document.getElementById('name').value;
    const mailContacto = document.getElementById('email').value;
    const telemovelContacto = document.getElementById('phone').value;

    const newContact = {
        nome: nomeContacto,
        mail: mailContacto,
        telemovel: telemovelContacto
    };

    if (contactos.some((contacto) => contacto.mail === newContact.mail || contacto.telemovel === newContact.telemovel)){
        return alert('Contacto ja existente');
    }
    contactos.push(newContact);
    createTable();

});

function editar(mail){
    const index = contactos.findIndex((contacto) => contacto.mail === mail);
    contactoEditar = contactos[index];
    
    contactoEditar.mail = prompt('indique o novo mail: ');
    contactoEditar.telemovel = prompt('indique o novo contacto: ');
    createTable();

}
function excluir(mail){
    const indexRemove = contactos.findIndex((contacto) => contacto.mail === mail);
    contactos.splice(indexRemove, 1);
    console.log(contactos);
    createTable();
}

function selecionar(){
    return true
}
let count = 0;
if (selecionar() === true){
    const divi = document.getElementById('Ncontactos');
    let texto = '';
    count += 1
    texto = `<p>N° de contactos selecionados: ${count}</p>`
    divi.innerHTML = texto;
}


