import { getLineTotal } from './register.js';
import { toUSD } from './format.js';

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
    const usd = toUSD(sandwich.price);
    const priceTextNode = document.createTextNode(usd + ' ');
    unitPriceCell.appendChild(priceTextNode);

    const totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = toUSD(getLineTotal(cart.quantity, sandwich.price));
    tr.appendChild(totalPriceCell);

    return tr;
}

export default renderCartItem;