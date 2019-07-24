function renderCartItem(cart) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    //td.textContent = 'test';
    tr.appendChild(nameCell);

    return tr;
}

export default renderCartItem;