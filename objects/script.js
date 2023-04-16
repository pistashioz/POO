

let employees = [];

for (let i = 0; i < 3; i++){
    addEmployees();
}

function addEmployees(){
    const employeeName = prompt('Nome: ')
    if (existEmployee(employeeName)){
        alert('O funcionario já existe')
        return
    }
    const employeeSalary = +prompt('Add your salary: ');
    const employeeDepart = prompt('add your department: ');
    let employee = {
        name: employeeName,
        salary: +employeeSalary,
        depart: employeeDepart,
        segSocial: function(){
            return this.employeeSalary * 0.11;
        }
        
    }
    employees.push(employee);
}

function existEmployee(newName){
    return employees.some(employee => employee.name == newName)
}

function showEmployees(){
    for (let employee in employees){
        alert(`Name: ${employee.name}, \nsalary: ${employee.salary}, \ndepartment: ${employee.depart}, \nSeg Social: ${employee.segSocial} `)
    }
}

function totalSalaries(){
    let totalSalary=0;
    for (let employee in employees){
        totalSalary+= +employee.salary;
    }
    console.log(totalSalary)
    return alert(totalSalary);
}

totalSalaries()