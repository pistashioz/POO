shoppingList = [];



function updateList(){
    const shopList = document.getElementById('shopList');
    let template = ''
    for (let product of shoppingList){
        template +=  `<li><ul><li value = ${product.nome}>Product: ${product.nome}</li>
        <li value = ${product.quantidade}>Amount: ${product.quantidade}</li>
        <li><button onclick="removeProduct('${product.nome}')">REMOVE</button></li></ul></li>`
    }
    shopList.innerHTML = template;
    const btnClear = document.getElementById('clearList');
    btnClear.addEventListener('click', function(event){
        event.preventDefault();
        shoppingList = []
        var list = document.getElementById('shopList');
        list.innerHTML = '';
        console.log(shoppingList)
    })
}
updateList();

function removeProduct(nome){
    
    const indexRemove = shoppingList.findIndex((product) => product.nome === nome);
    shoppingList.splice(indexRemove, 1);
    console.log(shoppingList);
    updateList()
    
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productAmount = document.getElementById('productAmount').value;
    
    const newProduct = {
        nome: productName,
        quantidade: +productAmount
    }

    if (shoppingList.some((product) => product.nome === newProduct.nome)){
        return alert('this product already exist!')
    }
    shoppingList.push(newProduct);
    console.log(shoppingList);
    updateList();

    return true;
});

