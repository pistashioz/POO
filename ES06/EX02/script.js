const movies = [
	{
		title: 'The Shawshank Redemption',
		genre: 'Drama',
		year: 1994,
		cover: 'https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
		trailer: 'https://www.youtube.com/embed/6hB3S9bIaco',
	},
	{
		title: 'The Godfather',
		genre: 'Drama',
		year: 1972,
		cover: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
		trailer: 'https://www.youtube.com/embed/5DO-nDW43Ik',
	},
];

const addMovie = (e) =>{
    e.preventDefault();
    const newMovie = {
        title: AddTitle.value,
        genre: addGenre.value,
        year: addYear.value,
        cover: addCover.value,
        trailer: addTrailer.value
    }
    
    if (movies.some((movie) => movie.title == newMovie.title)){
        return alert('movie already exist!');
    }

    movie.push(newMovie);
    buildTable();
    console.log(movies);
};
addForm.addEventListener('submit', addMovie);

const removeMovie = (title) => {
    const index = movies.findIndex((movie) => movie.title == title);
    movies.splice(index, 1);
    buildTable();
}

const buildTable = () => {
    let template = '';
	for (let movie of movies) {
		template += `<tr>
        <td>${movie.title}</td>
        <td>${movie.genre}</td>
        <td>
            <button onclick="openCover('${movie.cover}')">SEE COVER</button>
            <button>SEE TRAILER</button>
            <button onclick="removeMovie('${movie.title}')">REMOVE</button>
        </td>
    </tr>`;
	}
	tableBody.innerHTML = template;
};
buildTable()
    

const openCover = (src) =>{
    let img = dialogCover.querySelector('img');
    img.src = src;
    dialogCover.showModal();
}