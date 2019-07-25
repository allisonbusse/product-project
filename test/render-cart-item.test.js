import { findProduct } from '../src/register.js';
import sandwiches from '../src/data/sandwiches.js';
import renderCartItem from '../src/render-cart-item.js';

const test = QUnit.test;
QUnit.module('Cart Rendering');

test('render cart item', assert => {
    //Arrange
    // Set up your parameters and expectations
    const lineItem = {
        code: 'grilled-cheese',
        quantity: 2
    };
    const grilledCheese = findProduct(sandwiches, lineItem.code);
    const expected = '<tr><td>Grilled Cheese</td><td>2</td><td>$6.50 </td><td>$13.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderCartItem(lineItem, grilledCheese);
    const html = result.outerHTML;

    //Assert
    assert.equal(html, expected);
});