export class Book {
    title = '';
    genre = '';
    authors = [];
    nPages = 0;
    actualPage = 0;

    constructor(title, genre, authors, nPages, actualPage = 0){
        this.title = title
        this.genre = genre
        this.authors = authors
        this.nPages = nPages
        this.actualPage = actualPage
    }

    get title(){
        return this.title
    }
    

    set title(title){
        this.title = title
    }

    get genre(){
        return this.genre
    }


    set genre(genre){
        this.genre = genre
    }

    get authors(){
        return this.authors
    }

    set authors(authors){
        this.authors = authors
    }

    get nPages(){
        return this.nPages
    }

    set nPages(nPages){
        this.nPages = nPages
    }

    get actualPage(){
        return this.actualPage
    }

    set actualPage(actualPage){
        try {
            if (actualPage > this.nPages || actualPage < 0) {
              throw Error("Valor da página atual inválido!");
             }
             else
             {
              this.actualPage = actualPage;
             }
        }
        catch(error) {
          alert(`${error}`) }
        }

    forward(){
        this.actualPage = this.actualPage + 1
    }
    back(){
        this.actualPage = this.actualPage - 1
    }

    backAndForward(parameter, numOfPages){
        if (parameter == 'forward'){
            if ((this.actualPage + numOfPages) < this.nPages){
                this.actualPage = this.actualPage + numOfPages
            }
            else{
                throw Error("Begin Book!");
            }

        }
        else if (parameter == 'back'){
            if ((this.actualPage - numOfPages) >= 0){
                this.actualPage = this.actualPage - numOfPages
            }
            else{
                throw Error("Book Dned!");
            }
        }
        else{
            throw Error("Book Dned!");
        }
    }

}