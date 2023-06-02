import {Parceira} from './parceiraModel.js'


let parceiras = [];


let parceira = new Parceira("MTK Digital Agency",
"mtk@mtk.com",
["TSIW", "Design"],
5,
["Imagem gráfica MKTalent", "Campanha publicitária"]);

parceiras.push(parceira)

parceira = new Parceira("BindTunning",
"contacto@bindtunning.com",
["TSIW"],
3,
["Web Parts for Sharepoint", "Sharepoint Intranet Templates"]);

parceiras.push(parceira);

parceira = new Parceira("Kendir Studios",
"edu@kendir.com",
["TSIW", "Multimédia", "Design"],
4,
["Desenvolvimento aventuras educativas"]);

parceiras.push(parceira)


function f1(){
    let numProjects = [];
    parceiras.filter(function(parceira){
        numProjects.push(parceira.nomesProjetos.length)
    });
    let sum = numProjects.reduce(function(a, b){
        return a + b
    })
    alert('numero total de projetos:', sum)
}
function f2(){
    const curso = prompt('indique o curso: ');
    let projectsByCourse = []
    parceiras.filter(function(parceira){
        parceira.cursos.forEach(function(course){
            if (course == curso){
                projectsByCourse.push(parceira.nomesProjetos)
            }
        })
    });
    alert(projectsByCourse)
}
function f3(){
    let numProjects = []
    parceiras.filter(function(parceira){
        numProjects.push(parceira.nomesProjetos.length)
    });
    console.log(numProjects)
    const max = numProjects.reduce((a, b) => Math.max(a, b), -Infinity);
    console.log(max)
}
function f4(){
    const curso = prompt('indique o curso: ');
    let projectsByCourse = []
    parceiras.filter(function(parceira){
        parceira.cursos.forEach(function(course){
            if (course == curso){
                projectsByCourse.push(parceira.empresa)
            }
        })
    });
    alert(projectsByCourse.length)
}
function f5(){
    const nomeEmpresa = prompt('indique nome da empresa: ');
    const novoProjeto = prompt('indique o nome do novo projeto: ');
    parceiras.filter(function(parceira){
        if (parceira.empresa == nomeEmpresa){
            if(parceira.nomesProjetos.includes(novoProjeto)){
                alert('projeto ja existente')
            }
            else{
                parceira.nomesProjetos.push(novoProjeto)
            }
        }
    })
}



const f1Btn = document.querySelector('#F1');
f1Btn.addEventListener('click', f1)

const f2Btn = document.querySelector('#F2');
f2Btn.addEventListener('click', f2)

const f3Btn = document.querySelector('#F3');
f3Btn.addEventListener('click', f3)

const f4Btn = document.querySelector('#F4');
f4Btn.addEventListener('click', f4)

const f5Btn = document.querySelector('#F5');
f5Btn.addEventListener('click', f5);




function renderTable(){
    const table = document.querySelector('tbody');
    for (let parceira of parceiras){    
        const line = document.createElement('tr');
    

        line.innerHTML = `
        <td id = 'parceira'>${parceira.empresa}</td>
        <td id = 'cursos'>${parceira.cursos}</td>
        <td id = 'cursos'>${parceira.nomesProjetos.length}</td>
        <td><input type="button" value="REMOVER"></td>
        `;
        table.append(line);

    const buttonX = line.getElementsByTagName('input')[0];
    buttonX.addEventListener('click', function () {
        this.parentNode.parentNode.remove();
        const index = parceiras.indexOf(parceira)
        parceiras.splice(index, 1)
    });
    }

}


window.addEventListener('load', renderTable)