import { getLineTotal, findProduct, getOrderTotal } from '../src/register.js';
import sandwiches from '../src/data/sandwiches.js';
import cart from '../src/data/cart.js';

const test = QUnit.test;
QUnit.module('Cart Functions');

test('get line total', assert => {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 3;
    const price = 8.00;
    
    const expected = 24;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getLineTotal(quantity, price);

    //Assert
    assert.equal(result, expected);
});

test('find product info', assert => {
    //Arrange
    // Set up your parameters and expectations
    const code = 'blta';
    
    const expected = {
        code: 'blta',
        name: 'BLTA(vocado)',
        description: 'A tasty spin on a classic',
        category: 'hot',
        price: 8.00,
        cost: 3.46 
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const result = findProduct(sandwiches, code);

    //Assert
    assert.deepEqual(result, expected);
});

test('get order total', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = 59.00;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getOrderTotal(cart, sandwiches);

    //Assert
    assert.equal(result, expected);
});
