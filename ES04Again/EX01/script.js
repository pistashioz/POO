const bttn = document.getElementById('btn');
const txt = document.getElementById('text');



window.addEventListener('load', function(){
    bttn.addEventListener('click', function() {
        alert(txt.value.length);
    });
    bttn.addEventListener('mouseup', function(){
        alert('obrigado pelo clique do botao');
    })
})