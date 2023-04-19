const categories = ['fruit', 'vegetables', 'meat', 'fish', 'beverages', 'others'];
const products = [];
const form = document.querySelector('form');



function buildTable(){
    let template = '';
    for (let product of products){
        template += `<tr class = 'product'>
        <td>${product.nome}</td>
        <td>${product.categoria}</td>
        <td>${product.quantidade}</td></tr>`;
    }
    tableBody.innerHTML = template;
}




form.addEventListener('submit', function(event){
    event.preventDefault();
    const productName = document.getElementById('nome').value;
    const productCategory = document.getElementById('category').value;
    const productAmount = document.getElementById('amount').value;

    const newProduct = {
        nome: productName,
        categoria: productCategory,
        quantidade: productAmount
    }

    if (products.some((product) => product.nome === newProduct.nome)){
        return alert(`${newProduct.name} already exist!`);
    }
    products.push(newProduct);
    console.log(products);
    buildTable();
    return true
});

btnNPr = document.getElementById('numProducts');

btnNPr.addEventListener('click', function(){

    let sum = 0;
    for (let product of products){
        sum += +product.quantidade
    }
    return alert(`a lista de compras tem ${sum} produtos`);
})


btnCategory = document.getElementById('productsCategory');

btnCategory.addEventListener('click', function(){
    const categoriaPedida = prompt('Indique a categoria');

    if (categories.some((category) => category === categoriaPedida)){
        let sum = 0;
        for (let product of products){
            if (product.categoria == categoriaPedida){
                sum += 1
            }
        }
        return alert(`A lista de compras tem ${sum} produtos da categoria ${categoriaPedida} a comprar`)
    }
})






buildTable();
