import { getLineTotal } from './register.js';

function renderCartItem(cart, sandwich) {
    let tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = sandwich.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = cart.quantity;
    tr.appendChild(quantityCell);

    const unitPriceCell = document.createElement('td');
    tr.appendChild(unitPriceCell);
    const usd = sandwich.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd + ' ');
    unitPriceCell.appendChild(priceTextNode);

    const totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = getLineTotal(cart.quantity, sandwich.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(totalPriceCell);

    return tr;
}

export default renderCartItem;