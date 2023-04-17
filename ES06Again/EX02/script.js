const films = [];
console.log(films)

const add = document.querySelector('#addForm');
const reset = document.querySelector('#reset')
function createTable(){
    let template = ''
    for (let film of films){
        template +=  `<tr><td value = ${film.filmTitle}>${film.filmTitle}</td>
        <td value = ${film.filmGenre}>${film.filmGenre}</td>
        <td><button onclick="openCover('${film.filmCover}')">SEE COVER</button>
        <button onclick="openCover('${film.filmTrailer}')">SEE TRAILER</button>
        <button onclick="removeFilm('${film.filmTitle}')">REMOVE</button></td>
        </tr> `
    }
    tableBody.innerHTML = template;
}

createTable()

add.addEventListener('submit', function(event){
    event.preventDefault()
    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const year = +document.querySelector('#year').value;
    const cover = document.querySelector('#cover').value;
    const trailer = document.querySelector('#trailer').value;

    const newFilm = {
        filmTitle: title,
        filmGenre: genre,
        filmYear: year,
        filmCover: cover,
        filmTrailer: trailer
    }
    if (films.some((film) => film.filmTitle === newFilm.filmTitle)){
        return alert('this film already exist!')
    }
    films.push(newFilm);
    console.log(films);
    createTable();
    return true;

});


function removeFilm(filmTitle){
    
    const indexRemove = films.findIndex((film) => film.filmTitle === filmTitle);
    films.splice(indexRemove, 1);
    console.log(films);
    createTable()
    
}

function openCover(src){
    const iframe = dialogTrailer.querySelector('iframe');
    iframe.src = src;
    dialogTrailer.showModal();
}

function openTrailer(src){
    const iframe = dialogTrailer.querySelector('iframe');
    iframe.src = src;
    dialogTrailer.showModal();
  };

reset.addEventListener('click', function(){
    while (films.length > 0) {
        films.pop();
    }
    createTable()
})
