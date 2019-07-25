import store from '../src/store.js';
import sandwiches from '../src/data/sandwiches.js';

const test = QUnit.test;
QUnit.module('Data Store Tests');
// QUnit.testStart(() => {
//     store.storage.clear();
// }); 

store.storage = window.sessionStorage;


test('check storage location', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = window.sessionStorage;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.storage;

    //Assert
    assert.equal(result, expected);
});

test('check get and save', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const key = 'sandwich';
    const sandwich = { type: 'blta' };

    //Act 
    // Call the function you're testing and set the result to a const
    store.save(key, sandwich);
    const result = store.get(key);

    //Assert
    assert.deepEqual(result, sandwich);
});

test('get products', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = sandwiches;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.getProducts();
    
    //Assert
    assert.deepEqual(result, expected);
});

test('get shopping cart', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [];

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.getShoppingCart();
    
    //Assert
    assert.deepEqual(result, expected);
});

test('add product code', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = { code: 'blta', quantity: 1 };

    //Act 
    // Call the function you're testing and set the result to a const
    const result = store.addProductCode();
    
    //Assert
    assert.deepEqual(result, expected);
});

