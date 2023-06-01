const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let letter = letters[Math.floor(Math.random()*letters.length)];

const table = document.getElementById('table');

const line = document.getElementsByTagName('td');
table.addEventListener('click', function(e){
    const cell = e.target.closest('td')
    console.log(cell.innerHTML)
    cell.innerHTML = letters[Math.floor(Math.random()*letters.length)];
    console.log(cell.innerHTML)
})
