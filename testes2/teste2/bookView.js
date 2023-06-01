import {Book} from "./bookModel.js"


const book1 = new Book('Os dias sem sorte', 'Romance', ['João Pais'], 233, 201);
const book2 = new Book('Amor limite', 'Romance', ['Maria Augusta',  'António Coimbra'], 513, 333);
const book3 = new Book('Raios', 'Aventura', ['Carlos Roma'], 232)
let books = [book1, book2, book3]


function f1(){
    const genreP = prompt('what genre?');
    let genreList = [];
    books.filter(function(book){
        if (book.genre == genreP){
            genreList.push(book.title)
        }
    })
    alert(genreList)
}

function f2(){
    let startedBooks = [];
    books.filter(function(book){
        if (book.actualPage > 0){
            startedBooks.push(book.title)
        }
    })
    alert(startedBooks)
}

function f3(){
    let readedPages = [];
    books.filter(function(book){
        readedPages.push(book.actualPage)
    })
    let sum = readedPages.reduce(function(a, b){
        return a + b
    })
    alert(sum)
}

function f4(){
    let halfSize = [];
    books.filter(function(book){
        if (book.actualPage > (book.nPages / 2)){
            halfSize.push(book.title)
        }
    })
    alert(halfSize)
}

function f5(bookChosen){
    const authorsName = prompt('write authors name');
    books.filter(function(book){
        if (book.title == bookChosen){
            if (!book.authors.includes(authorsName)){
                book.authors.push(authorsName)

            }
            else{
                alert('existant author')
            }
            alert(book.authors)    
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
f5Btn.addEventListener('click', function(){
    const bookChosen = prompt('which book?')
    f5(bookChosen)
});



function renderTable(){
    const table = document.querySelector('tbody');
    const leftHours = document.createElement('tr')
    for (let book of books){    
        const line = document.createElement('tr');
        const pagesNotReaded = book.nPages - book.actualPage
        const timeLeft = pagesNotReaded * 5
        line.innerHTML = `
        <td id = 'book'>${book.title}</td>
        <td id = 'notReaded'>${pagesNotReaded}</td>
        <td><input type="button" value="FORWARD"></td>
        <td id = 'timeLeft'>${timeLeft}m</td>
        `;
        table.append(line);

        const hours = parseInt(timeLeft / 60)
        leftHours.innerHTML = `<td colspan = 4 id = 'leftHours'>Tempo em horas restante: ${hours}h</td>`
        table.append(leftHours);

        const button = line.getElementsByTagName('input')[0];
        button.addEventListener('click', function () {
            const linha = this.parentNode.parentNode;
            linha.querySelector('#notReaded').innerHTML = `${pagesNotReaded - 1}m`;
            linha.querySelector('#timeLeft').innerHTML = `${timeLeft - 5}m`;

            table.querySelector('#leftHours').innerHTML = `Tempo em horas restante: ${hours - 0.0833333}h`
        });
    }

}


window.addEventListener('load', renderTable)