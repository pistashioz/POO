const buttonAdd = document.querySelector('#btnAdd');
const buttonShow = document.querySelector('#btnShow');
const buttonRemove = document.querySelector('#btnRemove');

const sltColors = document.querySelector('select')


buttonAdd.addEventListener('click', function(){
    const color = prompt('add the new color');
    sltColors.innerHTML += `<option value='${color}'>${color}</option>`;
});


buttonRemove.addEventListener('click', function(){
    sltColors.remove(sltColors.selectedIndex)
})

buttonShow.addEventListener('click', function(){
    alert(sltColors.value)
})
