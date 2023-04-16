const games = [
    { name: 'Rick Dangerous', year: 1989 },
    { name: 'Goblins', year: 1992 },
    { name: 'Golden Axe', year: 1989 }
   ];

for (const game of games){
console.log(`Name: ${game.name} / Year: ${game.year}`)
};

console.log(games.length);

const gameName = document.getElementById('gameName');
const gameYear = document.getElementById('gameYear');
const addForm = document.querySelector('form');
const buttonRemove = document.getElementById('remove');

addForm.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(gameName)
    const newGame = {
        name: gameName.value,
        year: +gameYear.value
    }

    if (games.some((game) => game.name === newGame.name)){
        return alert('this game already exist');
    }
    games.push(newGame);
    console.log(games);
    return true
});

buttonRemove.addEventListener('click', function(event){
    event.preventDefault();
    const toRemoveName = gameName.value;
    const indexRemove = games.findIndex((game) => game.name === toRemoveName);

    if (indexRemove === -1){
        alert('game not found')
    }
    games.splice(indexRemove, 1)
    console.log(games)
    return true;
});


function gamesFrom90(){
    return games.filter((game) => game.year >= 1990 && game.year < 2000).map((game) => game.name)

}
alert(gamesFrom90());

function concatenateGameNames(){
    return games
        .map((game)=> game.name)
        .join('')
        .toLowerCase()
        .replaceAll(' ', '')
}
console.log(concatenateGameNames())