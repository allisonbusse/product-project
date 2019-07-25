import sandwiches from './data/sandwiches.js';

const store = {
    storage: window.localStorage,
    
    // Save item to store
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },

    // Get item from store
    get(key) {
        const json = store.storage.getItem(key);
        const parsedItem = JSON.parse(json);
        return parsedItem;
    },

    getProducts() {
        let products = store.get('products');
        if(!products) {
            store.save('products', sandwiches);
            products = sandwiches;
        }
        return products;
    },

    addProductCode(code) {
        let shoppingCart = store.getShoppingCart();
        const lineItem = 
        store.save.shoppingCart;
    },

    getShoppingCart() {
        let shoppingCart = store.get('shopping-cart');
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    }
};


export default store;