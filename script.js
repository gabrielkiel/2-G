let cart = [];
const products = [
    { id: 1, name: 'Product 1', price: 10.00, description: 'High quality product 1' },
    { id: 2, name: 'Product 2', price: 20.00, description: 'Premium product 2' },
    { id: 3, name: 'Product 3', price: 15.00, description: 'Excellent product 3' }
];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
        alert(product.name + ' added to cart!');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
    console.log('Cart items: ' + cart.length);
    console.log('Cart total: $' + cartTotal.toFixed(2));
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert('Order placed! Total: $' + total.toFixed(2));
    cart = [];
    updateCart();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});