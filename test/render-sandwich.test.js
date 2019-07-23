import renderSandwich from '../src/render-sandwich.js';

const test = QUnit.test;
QUnit.module('Render Sandwich');

test('render grilled cheese', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const grilledCheese = {
        code: 'grilled-cheese',
        name: 'Grilled Cheese',
        description: 'Go back to being a kid',
        category: 'hot',
        price: 6.50,
        cost: 4.02
    };
    
    const expected = '<li class="hot" title="Go back to being a kid"><h3>Grilled Cheese</h3><img src="/assets/grilled-cheese.jpg" alt="grilled-cheese image"><p class="price">$6.50 <button value="grilled-cheese">Add</button></p></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const renderedSandwich = renderSandwich(grilledCheese);
    const result = renderedSandwich.outerHTML;

    //Assert
    assert.equal(result, expected);
});
