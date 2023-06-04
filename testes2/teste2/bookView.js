import {Book} from "./bookModel.js"


const book1 = new Book('Os dias sem sorte', 'Romance', ['João Pais'], 233 , 201);
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
    try{
        const book = books.find((book) => book.title === bookChosen);
         
         if (book.authors.includes(authorsName)){
            throw Error('This author already exist!')
         }
         else{
            book.authors.push(authorsName)
            alert('author was added')
         }
    }
    catch (error) {
        alert(error)
    }

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


function renderTable() {
    const table = document.querySelector("table");
    let result = "";
    let total = 0;
    result = `
      <tr>
        <th>TÍTULO</th>
        <th>Nº PÁGINAS NÃO LIDAS</th>
        <th>AÇÃO A EXECUTAR</th>
        <th>TEMPO RESTANTE</th>
      </tr>
    `;
    for (const book of books) {
      result += `
        <tr>
          <td>${book.title}</td>
          <td style="text-align: center">${book.nPages - book.actualPage}</td>
          <td><button class='forward' id='${book.title}'>AVANÇAR</button></td>
          <td>${(book.nPages - book.actualPage) * 5}m</td>
        </tr>
      `;
      total += (book.nPages - book.actualPage) * 5;
    }
    result += `<tr><td colspan="4" style="text-align: right">Tempo em horas: ${Math.ceil(total/60)
    }h</td></tr>`;
    table.innerHTML = result;
  
    // ADICIONAR LISTENER AO BOTÃO AVANÇAR
    const buttons = table.querySelectorAll(".forward");
    for (const button of buttons) {
      button.addEventListener("click", (event) => {
        const book = books.find((book) => book.title === event.target.id);
        try {
          book.forward();
        } catch (error) {
          alert(error);
        }
        renderTable();
      });
    }
  
  
  }

  renderTable()