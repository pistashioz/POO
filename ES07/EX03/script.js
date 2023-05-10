const films = [];
const directors = [];
class Movie {

    constructor(title, year, director, duration, actors){
        this.title = title
        this.year = year
        this.director = director
        this.duration = duration
        this.actors = actors
    }
};

class Director {

    constructor(name, birthday, country){
        this.name = name
        this.birthday = birthday
        this.country = country
    }
}

function createTable(){
    let template = ''
    for (let film of films){
        template +=  `<tr><td value = ${film.title}>${film.title}</td>
        <td value = ${film.director}>${film.director}</td>
        <td value = ${film.actors}>${film.actors}</td>
        <td value = ${film.year}>${film.year}</td>
        <td value = ${film.duration}>${film.duration}</td>
        </tr> `
    }
    tableBody.innerHTML = template;
}


const addMovie = document.querySelector('#createMovie');
addMovie.addEventListener('click', function(event){

    event.preventDefault()
    const title = document.querySelector('#title').value;
    const year = +document.querySelector('#year').value;
    const director = document.querySelector('#director').value;
    const duration = +document.querySelector('#duration').value;
    const actors = document.querySelector('#actors').value;
    const newFilm = new Movie(title, year, director, duration, actors);
    if (films.some((film) => film.title === newFilm.title)){
        return alert('this film already exist!')
    }

    films.push(newFilm);
    createTable();
    return true;
});

const addDirector = document.querySelector('#createDirector');
addDirector.addEventListener('click', function(event){
    event.preventDefault();
    const name = document.querySelector('#directorName').value;
    const birthday = document.querySelector('#birthday').value;
    const country = document.querySelector('#country').value;
    const newDirector = new Director(name, birthday, country);
    if (directors.some((director) => director.name === newDirector.name)){
        return alert('this director already exist!');
    }

    directors.push(newDirector);
    return true
});

function filmsByDirector(){
    const filmsByDirector = [];
    const directorT = document.querySelector('#directorWanted').value;
    for (let film of films){
        if (film.director == directorT){
            filmsByDirector.push(film.title);
        }
    }
    console.log(filmsByDirector);
}

function actorInFilms(){
    const actorToSearch = document.querySelector('#actorWanted').value;
    let moviesFiltered = [];
    const message = `Movies With Actor ${actorToSearch}:`;

    films.forEach((element) => {
      if (element.actors.includes(actorToSearch)) {
        moviesFiltered.push(element);
      }
    });
    console.log(message, moviesFiltered);
    moviesFiltered = [];
}


createTable();

const btnDirectors = document.querySelector('#byDirector');
btnDirectors.addEventListener('click', function(event){
    event.preventDefault();
    filmsByDirector();

});

const btnActors = document.querySelector('#withActor');
btnActors.addEventListener('click', function(event){
    event.preventDefault();
    actorInFilms();
})