import sandwiches from './sandwiches.js';
import renderSandwiches from './render-sandwich.js';

const eachSandwich = document.getElementById('product-list');
    
for(let i = 0; i < sandwiches.length; i++) {
    const sandwich = sandwiches[i];
    const listItem = renderSandwiches(sandwich);
    eachSandwich.appendChild(listItem);
}