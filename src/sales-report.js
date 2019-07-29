import renderCartItem from './render-cart-item.js';
import store from './store.js';

// Access DOM elements
const reportTable = document.getElementById('report-content');
const tableFooter = document.getElementById('table-footer');
let tableRow;


// Get sales data
const sales = store.getSales();

// Populate table footer with order total
// const orderTotal = getOrderTotal(shoppingCart);
// tableFooter.textContent = orderTotal;

// Populate table cells with cart.js data
for(let i = 0; i < sales.length; i++) {
    const cartItem = sales[i];
    const sandwich = store.getSales(cartItem.code);
    tableRow = renderCartItem(cartItem, sandwich);
    reportTable.appendChild(tableRow);
}


