import { getOrderTotal } from './register.js';
import renderCartItem from './render-cart-item.js';
import { toUSD } from './format.js';
import store from './store.js';

// Access DOM elements
const cartTable = document.getElementById('cart-content');
const tableFooter = document.getElementById('table-footer');
let tableRow;
const promoCodeInput = document.getElementById('promo-code');
const promoCodeApply = document.getElementById('apply-promo-code');


// Get shopping cart data
const shoppingCart = store.getShoppingCart();

// Populate table footer with order total
const orderTotal = toUSD(getOrderTotal(shoppingCart));
tableFooter.textContent = orderTotal;

// Populate table cells with cart.js data
for(let i = 0; i < shoppingCart.length; i++) {
    const cartItem = shoppingCart[i];
    const sandwich = store.getProduct(cartItem.code);
    tableRow = renderCartItem(cartItem, sandwich);
    cartTable.appendChild(tableRow);
}

// Event listener to apply promo code
promoCodeApply.addEventListener('click', () => {
    if(promoCodeInput.value === 'SAVE20') {
        tableFooter.textContent = orderTotal * 0.8;
    }
});
