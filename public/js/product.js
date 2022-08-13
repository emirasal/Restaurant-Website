const setData = (data) => {

    // First checking if the products exists in the database
    if (data.name == null) {
        location.replace('/404')
    }

    let title = document.querySelector('title');
    title.innerHTML += data.name;

    // image of the product
    document.getElementById("product-image").src = data.img;
  
    // setting up texts
    const name = document.getElementById('product-name');
    const price = document.getElementById('product-page-price');
 
    name.innerHTML = data.name;
    price.innerHTML = data.price + ` TL`;

    // cart button
    const cartBtn = document.querySelector('.add-to-cart');
    cartBtn.addEventListener('click', () => {
        cartBtn.innerHTML = add_product_to_cart('cart', data);
    })
}

// fetching the data from the google firebase
const fetchProductData = () => {
    fetch('/get-products', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({id: productId})
    })
    .then(res => res.json())
    .then(data => {
        setData(data);
    })
    .catch(err => {
        location.replace('/404');
    })
}


let productId = null;
if (location.pathname != '/products'){
    productId = decodeURI(location.pathname.split('/').pop());
    fetchProductData();
}