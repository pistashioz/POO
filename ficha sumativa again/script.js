const categories = ['fruit', 'vegetables', 'meat', 'fish', 'beverages', 'others'];
const products = [];
const form = document.querySelector('form');

console.log(products)
function buildTable(){
    let template = '';
    for (let product of products){
        template += `<tr class = 'product'>
        <td>${product.name}</td>
        <td>${product.category}</td>
        td>${product.amount}</td>`;
    }
    tableBody.innerHTML = template;
}

buildTable();
const productName = document.querySelector('#name').value;
const productCategory = document.querySelector('#category').value;
const productAmount = +document.querySelector('#amount').value;
console.log(productName)
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(productName)
    const newProduct = {
        name: productName,
        category: productCategory,
        amount: productAmount
    }

    if (products.some((product) => product.name === newProduct.name)){
        return alert('this product already exist');
    }
    products.push(newProduct);
    console.log(products);
    buildTable();
    return true
});