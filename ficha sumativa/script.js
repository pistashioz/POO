const form = document.querySelector('form')
const categorias = ['', 'fruta', 'legumes', 'carne', 'peixe', 'bebida', 'outros']
const produtos = [];

form.addEventListener('submit', function(event){
    const txtName = document.getElementById('addProduct');
    const txtCategory = document.querySelector('#addCategory');
    const txtQuantity = document.querySelector('#addQuantity')

    if (produtos.some(item => item.name == txtName.value)){
        return alert('o produto ja existe!');
    }
    else{
        addProduto(txtName.value, txtCategory.value, txtQuantity.value)
        renderTable(txtName.value, txtCategory.value, txtQuantity.value);
    }
    event.preventDefault()
})


function addProduto(txtName, txtCategory, txtQuantity){
    const objProduct = {
        name: txtName,
        category: txtCategory,
        quantity: txtQuantity,
    }
    produtos.push(objProduct);
}

function renderTable(txtName, txtCategory, txtQuantity){
    const table = document.querySelector('table');
    table.innerHTML +=
        `<tr class = 'product'>
        <td align = center>${txtName}</td>
        <td align = center>${txtCategory}</td>
        <td align = center>${txtQuantity}</td>
        </tr>`;
}

renderTable(txtName, txtCategory, txtQuantity);

document.querySelector('#nProducts').addEventListener('click', function(event){
    alert(`A lista tem ${produtos.length}  produtos`);
    event.preventDefault();
});

document.querySelector('#productsByCategory').addEventListener('click', function(event){
    const categoria = prompt('qual a categoria que quer contar? ').toLowerCase();

    let filterCategory = produtos.filter(item => item.category == categoria);
    alert(`A lista de compras tem ${filterCategory.length} produtos da categoria ${categoria}`);
    event.preventDefault();
});

document.querySelector('#nTotal').addEventListener('click', function(event){
    let total = produtos.reduce((sum, item)=> sum+ +item.quantity, 0)
    alert(`A lista de compras tem ${total} items de produtos`)
    event.preventDefault();
});

document.querySelector('#clear').addEventListener('click', function(event){
    if (confirm('deseja mesmo apagar?')){
        produtos = []
        renderTable();
    }
});


function addCategorySelector(novaCategoria){
    const selector = document.querySelector('select')
    selector.innerHTML += `<option value = ${novaCategoria}>${novaCategoria.toUpperCase()}</option>`
}

document.querySelector('#newCategory').addEventListener('click', function(event){
    const novaCategoria = prompt('qual a nova categoria? ');
    if (categorias.includes(novaCategoria.toLowerCase)){
        alert('a categoria já existe no seletor')
    }
    else{
        addCategorySelector(novaCategoria);
        categorias.push(novaCategoria);
    }
    event.preventDefault()
});