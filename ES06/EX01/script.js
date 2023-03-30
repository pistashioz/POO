const games = [
    {name: 'Rick Dangeorus', year: 1989},
    {name: 'Goblins', year: 1992},
    {name: 'Golden Axe', year: 1989}
]
for (const game of games){
    console.log(`Name: ${game.name}\nYear: ${game.year}`)
}

console.log(games.length)


function addGame(gameName, gameYear){
        if (games.some((game) => game.gameName == gameName)){
            return alert('this game alerady exist!')
        }
        else{
    
            const newGame = {
                name: gameName,
                year: gameYear
            }
            games.push(newGame)
        }
}

const averageLaunchDate = (games) => {
	let sum = games.reduce((acc, game) => acc + game.year, 0);
	return sum / games.length;
};
console.log(`Average launch date: ${averageLaunchDate(games)}`);


button.addEventListener("click",()=> {

    const gameName = document.querySelector('#gameName').value;
    const gameYear = document.querySelector('#gameYear').value;

    addGame(gameName, gameYear)
 });

 const removeGame = (e) => {
	e.preventDefault();
	let toRemoveName = gameName.value;
	let indexToRemove = games.findIndex((game) => game.name == toRemoveName);
	if (indexToRemove == -1) return alert('Game not found');
	games.splice(indexToRemove, 1);
	console.log(games);
};
removeForm.addEventListener('submit', removeGame);

const concatenateGameNames = (games) => {
	return games
		.map((game) => game.name)
		.join('')
		.toLowerCase()
		.replaceAll(' ', '');
};
console.log(`Concatenated game names: ${concatenateGameNames(games)}`);