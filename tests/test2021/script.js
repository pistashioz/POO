const products = [];
console.log(products)

const add = document.querySelector('form');

function createTable(){
    let template = ''
    for (let product of products){
        template +=  `<tr><td value = ${product.nombre}>${product.nombre}</td>
        <td value = ${product.valor}>${product.valor}</td>
        <td value = ${product.amount}>${product.amount}</td>
        <td value = ${product.iva}>${product.iva}</td>
        <td value = ${product.subtotal()}>${product.subtotal()}</td>
        </tr> `
    }
    tableBody.innerHTML = template;
}

createTable()

add.addEventListener('submit', function(event){
    console.log('?')
    event.preventDefault()

    const productValue = document.getElementById('product');
    const productName = productValue.options[productValue.selectedIndex].text;
    const productAmount = document.getElementById('amount').value;
    const productIva = document.querySelector('input[type = "radio"]:checked').value;
    const newProduct = {
        nombre: productName,
        valor: +productValue.value,
        amount: +productAmount,
        iva: +productIva,
        subtotal: function(){
            return (this.valor+ (this.valor * (this.iva / 100))) * this.amount;
        }

    }
    if (products.some((product) => product.nombre === newProduct.nombre)){
        return alert('this product already exist!')
    }
    products.push(newProduct);
    console.log(products);
    createTable();
    return true;

});


const buy = document.getElementById('buy');
const cart = document.getElementById('addCart');
buy.addEventListener('click', function(){
    let total = 0;
    for (let product of products){
        total += +product.subtotal()
    }
    alert(`O cliente ${document.getElementById('client').value} tem de pagar ${total}`)
})

cart.addEventListener('click', function(){
    const nome = prompt('Name of the product: ');
    const valorNovo = +prompt('value of the product');

    if (products.some((product) => product.nombre === nome)){
        return alert('this product already exist!')
    }
    const produto = {
        nombre: nome,
        valor: valorNovo,
        amount: 1,
        iva: -23,
        subtotal: function(){
            return (this.valor+ (this.valor * (this.iva / 100))) * this.amount;
        }
    }
    products.push(produto);
    console.log(products)
    createTable();
});