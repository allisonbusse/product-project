import store from './store.js';

export function getLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

export function findProduct(sandwiches, code) {
    for(let i = 0; i < sandwiches.length; i++) {
        const sandwich = sandwiches[i];
        
        if(sandwich.code === code) {
            return sandwich;
        }
    }
    return null;
}

export function getOrderTotal(cart) {
    let lineTotal;
    let i;
    let cartSandwich;
    let orderTotal = 0;
    for(i = 0; i < cart.length; i++) {
        cartSandwich = store.getProduct(cart[i].code);
        lineTotal = getLineTotal(cart[i].quantity, cartSandwich.price);
        orderTotal += lineTotal; 
    }
    return orderTotal;   
}

export function getReportTotal(reportItem) {
    let i;
    const sales = store.getSales();
    reportItem = sales[i];
    let reportTotal = 0;
    for(i = 0; i < sales.length; i++) {
        reportTotal += reportItem.quantity;
    }
    return reportTotal;
}