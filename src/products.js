import sandwiches from './sandwiches.js';
import renderSandwiches from './render-sandwich.js';

const showAllCategory = document.getElementById('show-all-category')
const hotCategory = document.getElementById('hot-category');
const coldCategory = document.getElementById('cold-category');
const breakfastCategory = document.getElementById('breakfast-category');
const eachSandwich = document.getElementById('product-list');
let listItem;
let i;

// Loop to display all sandwich options
for(let i = 0; i < sandwiches.length; i++) {
    const sandwich = sandwiches[i];
    listItem = renderSandwiches(sandwich);
    eachSandwich.appendChild(listItem);
}

// Buttons to sort categories
showAllCategory.addEventListener('click', () => {
    const allSandwiches = eachSandwich.querySelectorAll('li');
    for (i = 0; i < allSandwiches.length; i++) {
        allSandwiches[i].classList.remove('hidden');
    };
});

hotCategory.addEventListener('click', () => {
    const allSandwiches = eachSandwich.querySelectorAll('li');
    for (i = 0; i < allSandwiches.length; i++) {
        allSandwiches[i].classList.add('hidden');
    };
    const hotSandwiches = eachSandwich.querySelectorAll('.hot');
    for (i = 0; i < hotSandwiches.length; i++) {
        hotSandwiches[i].classList.remove('hidden');
    }
});

coldCategory.addEventListener('click', () => {
    const allSandwiches = eachSandwich.querySelectorAll('li');
    for (i = 0; i < allSandwiches.length; i++) {
        allSandwiches[i].classList.add('hidden');
    };
    const coldSandwiches = eachSandwich.querySelectorAll('.cold');
    for (i = 0; i < coldSandwiches.length; i++) {
        coldSandwiches[i].classList.remove('hidden');
    }
});

breakfastCategory.addEventListener('click', () => {
    const allSandwiches = eachSandwich.querySelectorAll('li');
    for (i = 0; i < allSandwiches.length; i++) {
        allSandwiches[i].classList.add('hidden');
    };
    const breakfastSandwiches = eachSandwich.querySelectorAll('.breakfast');
    for (i = 0; i < breakfastSandwiches.length; i++) {
        breakfastSandwiches[i].classList.remove('hidden');
    }
});
    