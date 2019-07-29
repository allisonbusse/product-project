function renderReportItem(cart, sandwich) {
    let tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = sandwich.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = cart.quantity;
    tr.appendChild(quantityCell);

    return tr;
}

export default renderReportItem;