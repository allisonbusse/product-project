import sandwiches from './data/sandwiches.js';
import { findProduct } from './register.js';

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
        const lineItem = findProduct(shoppingCart, code);
        if(lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                code: code,
                quantity: 1
            };

            shoppingCart.push(lineItem);
        }
        
        store.save('shopping-cart', shoppingCart);
    },

    getShoppingCart() {
        let shoppingCart = store.get('shopping-cart');
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },

    getProduct(code) {
        const products = store.getProducts();
        const product = findProduct(products, code);
        return product;
    },

    addProduct(newProduct) {
        const products = store.getProducts();
        products.push(newProduct);
        store.save('products', products);
    }
};


export default store;