function renderSandwich(sandwich) {
    const li = document.createElement('li');
    li.className = sandwich.category;
    li.title = sandwich.description;
    
    const h3 = document.createElement('h3');
    h3.textContent = sandwich.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '/assets/' + sandwich.code + '.jpg';
    img.alt = sandwich.code + ' image';
    li.appendChild(img);

    const pTwo = document.createElement('p');
    li.appendChild(pTwo);
    const usd = sandwich.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd + ' ');
    pTwo.appendChild(priceTextNode);
    pTwo.className = 'price';

    const button = document.createElement('button');
    button.value = sandwich.code;
    button.textContent = 'Add';
    pTwo.appendChild(button);

    return li;
}

export default renderSandwich;