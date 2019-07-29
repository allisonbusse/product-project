import { getReportTotal } from './register.js';
import renderReportItem from './render-sales-report.js';
import store from './store.js';

// Access DOM elements
const reportTable = document.getElementById('report-content');
const tableFooter = document.getElementById('table-footer');
let tableRow;


// Get sales data
const sales = store.getSales();


// Populate table cells with sales data
for(let i = 0; i < sales.length; i++) {
    const cartItem = sales[i];
    const sandwich = store.getProduct(cartItem.code);
    tableRow = renderReportItem(cartItem, sandwich);
    reportTable.appendChild(tableRow);
}

// Populate table footer with order total
const orderTotal = getReportTotal(cartItem);
tableFooter.textContent = orderTotal;


