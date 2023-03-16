const table = document.createElement('table');
const tableRow1 = document.createElement('tr');
const tableRow2 = document.createElement('tr');
const tableH1 = document.createElement('th');
const tableH2 = document.createElement('th');
const tableD1 = document.createElement('td');
const tableD2 = document.createElement('td');

const escola = document.createTextNode('escola');
const local = document.createTextNode('local');

const esmad = document.createTextNode('ESMAD');
const vdc = document.createTextNode('Vila do Conde');


tableH1.appendChild(escola);
tableH2.appendChild(local);
tableD1.appendChild(esmad);
tableD2.appendChild(vdc);

tableRow1.appendChild(tableH1);
tableRow1.appendChild(tableH2);

tableRow2.appendChild(tableD1);
tableRow2.appendChild(tableD2);

table.appendChild(tableRow1);
table.appendChild(tableRow2);

document.body.appendChild(table);

const isep = 'ISEP';
const porto = 'Porto';

table.innerHTML += `<tr><td>${isep}</td><td>${porto}</td></tr> ` 

document.querySelector('td:last-of-type').innerHTML = 'Vila do Conde/Povoa de Varzim';


const tbody = document.querySelector('tbody:first-of-type')
const tr = document.querySelector('tr:first-of-type');
tbody.removeChild(tr)