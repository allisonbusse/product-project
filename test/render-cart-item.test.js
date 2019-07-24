import { getLineTotal, findProduct, getOrderTotal } from '../src/register.js';
import sandwiches from '../src/data/sandwiches.js';
import cart from '../src/data/cart.js';
import renderCartItem from '../src/render-cart-item.js';

const test = QUnit.test;
QUnit.module('Cart Rendering');

test('render cart item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 2;
    const code = 'grilled-cheese';
    
    const expected = '<tr><td>Grilled Cheese</td><td>2</td><td>$6.50</td><td>$13.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderCartItem(cart);

    //Assert
    assert.equal(result, expected);
});