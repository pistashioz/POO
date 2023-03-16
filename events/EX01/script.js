var button = document.getElementById("button");
const parag = document.getElementsByTagName('p')[0]
button.addEventListener("click",() => {
   alert(parag.innerHTML)
});
button.addEventListener('mouseleave', function(){
    button.style.color = "blue";
})