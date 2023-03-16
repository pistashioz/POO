console.log(document.getElementById('p2').innerHTML);


const p = document.querySelectorAll('p');
for (const ph of p){
    console.log(ph.innerHTML);
}


const ps = document.getElementsByTagName('p');
for (const elm of ps){
    console.log(elm.innerHTML)
}


const red  = document.getElementsByClassName('red');
for (const elm of red){
    console.log(elm.innerHTML);
}

console.log(document.querySelector('p#p3').innerHTML);


const elements = document.querySelectorAll('p,div');
for (const elm of elements){
    console.log(elm.innerHTML);
}



const span = document.querySelectorAll('span');
for (const elm of span){
    console.log(elm.innerHTML)
}




const spanDiv = document.querySelector('div span');
console.log(spanDiv.innerHTML);




const spanOutDiv = document.querySelector('body>span');
console.log(spanOutDiv.innerHTML);
