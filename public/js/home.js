const productContainers = [...document.querySelectorAll('.product.container')];
const nxtBtn = [...document.querySelectorAll('.next-button')];
const preBtn = [...document.querySelectorAll('.pre-button')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

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