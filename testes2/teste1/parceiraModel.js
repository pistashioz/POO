export class Parceira {
    #empresa = ''
    #email = ''
    #cursos = []
    #nMaxProjetos = 0
    #nomesProjetos =[]

    constructor(empresa, email, cursos,  nMaxProjetos = 3, nomesProjetos){
        this.#empresa = empresa
        this.#email = email
        this.#cursos = cursos
        this.#nMaxProjetos = nMaxProjetos
        this.#nomesProjetos = nomesProjetos
    }

    get empresa(){
        return this.#empresa
    }

    set empresa(value){
        this.#empresa = value
    }

    get email(){
        return this.#email
    }

    set email(value){
        this.#email = value
    }

    get cursos(){
        return this.#cursos
    }

    set cursos(value){
        this.#cursos = value
    }

    get nMaxProjetos(){
        return this.#nMaxProjetos
    }

    set nMaxProjetos(value){
        this.#nMaxProjetos = value
    }

    get nomesProjetos(){
        return this.#nomesProjetos
    }

    set nomesProjetos(value){
        console.log(value.length)
        if (value.length > this.#nMaxProjetos){
            console.log('N° máximo de projetos já atingidos')
        }
        else{
            this.#nomesProjetos = value
        }
    }

    addProject(novoProjeto){
        if (this.#nomesProjetos.length < this.#nMaxProjetos){
            this.#nomesProjetos.push(novoProjeto)
        }
        console.log(this)

    }

    editNumMaxProjects(nProjetosMudar){
        this.#nMaxProjetos = nProjetosMudar;
        console.log(this)
    }

}
