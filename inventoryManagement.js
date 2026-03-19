let products = ("Laptop", "Phone", "Tablet", "Headphones");
function logFirstProduct() {
    console.log(products[0]);
}

function addProduct(product) {
    products.push(product);
}

function changeProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    } else {
        console.log("Index out of bounds");
    }

function removeLastProduct() {
    products.pop();
}
