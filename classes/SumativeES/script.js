
class Movie {
    movie = ''
    releaseDate = ''
    duration = 0
    country = ''
    actors = []
    director = ''
    constructor(movie, releaseDate, duration, country, actors, director){
        this.movie = movie
        this.releaseDate = releaseDate
        this.duration = duration
        this.country = country
        this.actors = actors
        this.director = director
    }
}
class Director {
    director = ''
    country = ''
    birthday = ''

    constructor(director, country, birthday){
        this.director = director
        this.country = country
        this.birthday = birthday
    }
}






//add to table  
function addMovie(movie, director, releaseDate, duration){
    const table = document.querySelector('table');
    const line = document.createElement('tr');
    line.innerHTML = `
        <td align = 'center'>${movie}</td>
        <td align = 'center'>${director}</td>
        <td align = 'center'>${releaseDate}</td>
        <td align = 'center'>${duration}</td>
        `
    table.append(line);

}

const frmFilm = document.querySelector('#movieForm');

let films = []
let directors  = []
function addFilmClass(movie, releaseDate, duration, country, actors, director){

    const movies = new Movie(movie, releaseDate, duration, country, actors, director);
    console.log(movies)
    films.push(movies)
    console.log(films)
    return films
}
function addDirectorClass(director, country, birthday){
    const directorData = new Director(director, country, birthday)
    console.log(directorData)
    directors.push(directorData)
    console.log(directors)
    return directors
}


frmFilm.addEventListener('submit', function(event){
    event.preventDefault();
    const movie = document.querySelector('#movieTitle').value;
    const director = document.querySelector('#director').value
    const releaseDate = document.querySelector('#yearReleased').value;
    const duration = document.querySelector('#duration').value
    const country = document.querySelector('#country').value;
    const actorsStr = document.querySelector('#actors').value;
    const birthday = document.querySelector('#birthday').value
    const actors = actorsStr.split(', ')
    addMovie(movie, director, releaseDate, duration);
    addFilmClass(movie, releaseDate, duration, country, actors, director);
    addDirectorClass(director, country, birthday);
})



document.querySelector('#directorBtn').addEventListener('click', function(){
    const direc = document.querySelector('#directorAllFilms').value;
    const list = document.querySelector('#here');
    films.filter(function(film) {
        let filmes = []
        if (film.director == direc){
            filmes.push(film.movie)
        }
        for (i = 0; i < filmes.length; i++){
            var linha = document.createElement('li')
            linha.innerText = filmes[i];
            list.appendChild(linha)
        }
    });
});



document.getElementById('actressBtn').addEventListener('click', function(){
    const actor = document.querySelector('#titleActress').value;
    const list = document.querySelector('#hereA');
    films.filter(function(film){
        let filmes = [];
        for (let actorChosen in film.actors){
            if (actorChosen == actor){
                filmes.push(film.movie)
            }

        for (i = 0; i < filmes.length; i++){
            var linha = document.createElement('li')
            linha.innerText = filmes[i];
            list.appendChild(linha)
        }
        }
    })
});

document.getElementById('countryBtn').addEventListener('click', function(){
    const country = document.querySelector('#countryAllFilms').value;
    const list = document.querySelector('#hereA');
    films.filter(function(film){
        let filmes = [];
        for (let countryChosen in film.country){
            if (countryChosen == country){
                filmes.push(film.movie)
            }

        for (i = 0; i < filmes.length; i++){
            var linha = document.createElement('li')
            linha.innerText = filmes[i];
            list.appendChild(linha)
        }
        }
    })
});


document.querySelector('#mostFilmsBtn').addEventListener('click', function(){
    let filmes = []
    directors.forEach((x) =>{
        if(filmes.some((val) => {return val[directors] == x[directors]})){
            filmes.forEach((k) => {
                if(k[directors] == x[directors]){
                    k['occurrence']++
                }
            })
        }
        else{
            let a = {}
            a[key] = x[key]
            a['occurrence'] = 1
            filmes.push(a);
        }
    })
})

