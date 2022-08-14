const add_product_to_cart = (type, product) => {    
    let data = JSON.parse(localStorage.getItem(type));
    if(data == null) {
        data = [];
    }

    product = {
        item: 1,
        name: product.name,
        price: product.price,
        image: product.img
    }
    data.push(product);
    localStorage.setItem(type, JSON.stringify(data));

    location.replace('/cart');
    return 'added';

}