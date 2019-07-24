import sandwiches from './data/sandwiches.js';
import cart from './data/cart.js';
import { getOrderTotal, findProduct } from './register.js';
import renderCartItem from './render-cart-item.js';
import { toUSD } from './format.js';

// Access DOM elements
const cartTable = document.getElementById('cart-content');
const tableFooter = document.getElementById('table-footer');
let tableRow;
const promoCodeInput = document.getElementById('promo-code');
const promoCodeApply = document.getElementById('apply-promo-code');

// Populate table footer with order total
const orderTotal = toUSD(getOrderTotal(cart, sandwiches));
tableFooter.textContent = orderTotal;

// Populate table cells with cart.js data
for(let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const sandwich = findProduct(sandwiches, cartItem.code);
    tableRow = renderCartItem(cartItem, sandwich);
    cartTable.appendChild(tableRow);
}

// Event listener to apply promo code
promoCodeApply.addEventListener('click', () => {
    if(promoCodeInput.value === 'SAVE20') {
        tableFooter.textContent = orderTotal * 0.8;
    }
});
