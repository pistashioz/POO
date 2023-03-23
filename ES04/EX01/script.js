const button = document.querySelector('input[type = "button"]');
const myTextBox = document.querySelector('input[type="text"]');
const myP = document.querySelector('p');

/*
button.addEventListener("click",() => {
   alert('Hello world')
});
*/

myTextBox.addEventListener('input', function() {
    myP.innerHTML = myTextBox.value;
});

button.addEventListener('click', function(){
    alert(myTextBox.value.length);
});


button.addEventListener('mouseup', function(){
    alert('obrigado pelo clique do botao');
});


window.addEventListener('load', function(){
    button.addEventListener('mouseup', function(){
        alert('obrigado pelo clique do botao');
    }); 
});