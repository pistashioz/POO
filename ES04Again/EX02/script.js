const add = document.getElementById('btnAdd');
const show = document.getElementById('btnShow');
const remove = document.getElementById('btnRemove');
const selector = document.querySelector('select');

add.addEventListener('click', function(){
    const option = prompt('add the new color: ');
    addNewFruit(option);
})


show.addEventListener('click', function(){
    alert(selector.value);
});

remove.addEventListener('click', function(){
    selector.remove(selector.selectedIndex);
})

function addNewFruit(option){
    selector.innerHTML += `<option value = '${option}'>${option}</option>`;
}

