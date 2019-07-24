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

export function getOrderTotal(cart, sandwiches) {
    let lineTotal;
    let i;
    let cartSandwich;
    let orderTotal = 0;
    for(i = 0; i < cart.length; i++) {
        cartSandwich = findProduct(sandwiches, cart[i].code);
        lineTotal = getLineTotal(cart[i].quantity, cartSandwich.price);
        orderTotal += lineTotal; 
    }
    return orderTotal;   
}