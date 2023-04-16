let employeeList = []

for (let i = 0; i<3; i++){
    addEmployee()
}



function addEmployee(){

    let employeeName = prompt('employee name: ');
    if (existEmployee(employeeName)){
        alert('o funcionario ja existe')
        return
    }
    let employeeSalary = +prompt('employee salary:')
    let employeeDepart = prompt('employee depart: ')
    let employee = {
        name: employeeName,
        salary: +employeeSalary,
        depart: employeeDepart,
        segSocial: function(){
            return this.salary * 0.11;
        },
    }

    employeeList.push(employee)
}

function showEmployees(){
    for (employee of employeeList){
        alert(`name: ${employee.name} \nsalary: ${employee.salary} \ndepart: ${employee.depart} \nseg social: ${employee.segSocial()}`);
    }
}

function existEmployee(newName){
    for (employee in employeeList){
        return employeeList.some(employee => employee.name == newName)
    }
}

showEmployees()

function totalSalaries(){
    let salarioFinal = 0;
    for (employee of employeeList){
        salarioFinal += employee.salary
    }
    return alert(salarioFinal);
}

