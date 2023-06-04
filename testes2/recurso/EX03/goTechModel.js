export class Employee {
    #name;
    #department;
    #nHours;
    #valueHour;
    #companies;

    constructor(name, department, nHours, valueHour = 30, companies){
        this.#name = name;
        this.#department = department;
        this.#nHours = nHours;
        this.#valueHour = valueHour;
        this.#companies = companies;
    }

    get name(){
        return this.#name
    }

    set name(value){
        this.#name = value
    }

    get department(){
        return this.#department
    }

    set department(value){
        this.#department = value
    }

    get companies(){
        return this.#companies
    }

    set companies(value){
        this.#companies = value
    }


    get nHours(){
        return this.#nHours
    }

    set nHours(value){
        try{
            if (value > 140){
                throw Error('N° maximo de horas de trabalho já atingido')
            }
            else{
                this.#nHours = value
            }
        }
        catch(error) {
            alert(`${error}`)
        }
    }
    

    get valueHour(){
        return this.#valueHour
    }

    set valueHour(value){
        this.#valueHour = value
    }

    addHours(employeeName, nHours2Add){
        if (this.#name == employeeName){
            if ((this.#nHours + nHours2Add) < 140){
                this.#nHours += nHours2Add
                console.log(this)
            }
            else{
                throw Error("O numero de horas ultrapassam o valor maximo!");
            }
        }
        else{
            throw Error("Employee doesnt exist!");
        }
    }
    
    editCompanies(employeeName, companyName){
        if (this.#name == employeeName){
            if (!this.#companies.includes(companyName)){
                this.#companies.push(companyName)
                console.log(this)
            }
            else{
                throw Error("a empresa ja existe");
            }
        }
        else{
            throw Error("Employee doesnt exist!");
        }
    }
}
