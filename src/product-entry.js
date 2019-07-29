import store from './store.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const image = formData.get('image-src');
    getBase64(image, (base64Url) => {

        
        const newProduct = {
            code: formData.get('code'),
            name: formData.get('name'),
            image: base64Url,
            description: formData.get('description'),
            category: formData.get('category'),
            price: +formData.get('price'),
            cost: +formData.get('cost')
            
        };
    
        store.addProduct(newProduct);
        alert('New product added!');
        form.reset();
        
    });
});


// found this on SO:
// https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        callback(reader.result);
    };
}

