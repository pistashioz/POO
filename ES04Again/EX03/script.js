

function addGame(name, year, genre, cover){
    const table = document.querySelector('table');
    const line = document.createElement('tr');
    line.innerHTML = `
        <td align = 'center'>${name}</td>
        <td align = 'center'>${year}</td>
        <td align = 'center'>${genre}</td>
        <td align = 'center'>${cover}</td>
        <td><input type="button" value="x"></td>`;
    table.append(line);

    
    const buttonX = line.getElementsByTagName('input')[0];
    buttonX.addEventListener('click', function () {
      this.parentNode.parentNode.remove();
    });
}

const dateNow = new Date();
gameYear.max = dateNow.getFullYear();

const frmGame = document.querySelector('form');


frmGame.addEventListener('submit', function(event){
    event.preventDefault();
    const year = document.querySelector('#gameYear').value;
    if (year <= 1950 || year > dateNow.getFullYear()){
        return alert('Erro');
    }
    else{
        alert('Validation OK');
        const name = document.querySelector('#gameName').value;
        const genre = document.querySelector('#genre').value;
        const cover = document.querySelector('#urlGameCover').value;

        addGame(name, year, genre, cover);
        frmGame.reset();
    }

})