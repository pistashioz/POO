import {Employee} from './goTechModel.js'

let employees = []

let employee = new Employee("Carlos Andrade",
["Informatica", "Electronica"], 
12,
35,
["MKTalent", "F3M "]);

employees.push(employee);

employee = new Employee("Maria Pereira",
["Informatica", "Redes"], 
20,
25,
["SKRey"]);

employees.push(employee);

employee = new Employee("Carla Fonseca",
["Marketing"], 
25,
30,
["SKRey", "MKTalent "]);

employees.push(employee);

function f1(){
    let numHours = [];
    employees.filter(function(employee){
        numHours.push(employee.nHours)
    });
    let sum = numHours.reduce(function(a, b){
        return a + b
    })
    console.log('numero total de horas:', sum)
}
function f2(employeeName){
    employees.filter(function(employee){
        if (employee.name == employeeName){
            console.log(employee.companies)
            console.log(employee.nHours * employee.valueHour)
        }
    });
}
function f3(employeeName){
    employees.filter(function(employee){
        if (employee.name === employeeName){
            console.log(employee.companies)
        }
    });
}
function f4(){
    let numHours = []
    employees.filter(function(employee){
        numHours.push(employee.nHours)
    });
    const max = Math.max(...numHours);
    const index = numHours.indexOf(max)
    alert(employees[index].name)
}
function f5(employeeName, companyName){
    employees.filter(function(employee){
        try{
            if (employee.name == employeeName){
                console.log(employee.name)
                if(employee.companies.includes(companyName)){
                    throw Error("company already exist");
                }
                else{
                    employee.companies.push(companyName);
                    console.log(employee.companies)  
                }
            }
        }
        catch(error){
            alert(`${error}`)
        }
    })
}



const f1Btn = document.querySelector('#F1');
f1Btn.addEventListener('click', f1)

const f2Btn = document.querySelector('#F2');
f2Btn.addEventListener('click',function(){
    const employeeName = prompt('Indique o nome do empregado: ')
    f2(employeeName)
})

const f3Btn = document.querySelector('#F3');
f3Btn.addEventListener('click', function(){
    const employeeName = prompt('Indique o nome do empregado: ')
    f3(employeeName)
})

const f4Btn = document.querySelector('#F4');
f4Btn.addEventListener('click', f4)

const f5Btn = document.querySelector('#F5');
f5Btn.addEventListener('click', function(){
    const employeeName  = prompt('indique o do empregado: ');
    const companyName = prompt('indique nome da empresa: ');
    
    f5(employeeName, companyName)
});


function renderTable() {
    const table = document.querySelector("table");
    let result = "";
    let total = 0;
    result = `
      <tr>
        <th>NOME</th>
        <th>DEPARTAMENTOS</th>
        <th>N° HORAS</th>
        <th>VH</th>
        <th>TOTAL</th>
      </tr>
    `;
    for (const employee of employees) {
        total += employee.valueHour * employee.nHours;
      result += `
        <tr>
          <td>${employee.name}</td>
          <td>${employee.department}</td>
          <td>${employee.nHours}</td>
          <td>${employee.valueHour}</td>
          <td>${total}</td>
        </tr>
      `;

    }
    table.innerHTML = result;

    const totalValue = document.querySelector('h3');
   
    totalValue.innerHTML = `Total: ${total}`
  }

  renderTable()

