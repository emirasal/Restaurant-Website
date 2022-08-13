const createSmallCards = (data) => {
    return `
    <div class="sm-product">
        <img src="img/products/card1.png" class="sm-product-img" alt="">
        <div class="sm-text">
            <p class="sm-product-name">${data.name}</p>
        </div>
        <div class="item-counter">
            <button class="counter-btn-decrement">-</button>
            <p class="item-count">${data.item}</p>
            <button class="counter-btn-increment">+</button>
        </div>
        <p class="sm-price" data-price="${data.price}">${data.price * data.item} TL</p>
        <button class="sm-delete-btn"><img src="./img/close.png" alt=""></button>
    </div>
    `;
}

let totalBill = 0;

const setProducts = (name) => {
    const element = document.querySelector('.cart');
    let data = JSON.parse(localStorage.getItem('cart'));
    if(data == null || data.length == 0){
        element.innerHTML = `<img src="./img/empty-cart.png" class="empty-cart-img"
         alt="">`;
    }
    else {
        for(let i = 0; i < data.length; i++){
            element.innerHTML += createSmallCards(data[i]);
            totalBill += Number(data[i].price * data[i].item);

            UptdateBill();
        }
    }
    setupEvents();
}

const UptdateBill = () => {
    let billPrice = document.querySelector('.bill')
    billPrice.innerHTML = `${totalBill} TL`;
}

const setupEvents = () => {
    // seting up counter event
    const counterMinus = document.querySelectorAll('.counter-btn-decrement');
    const counterPlus = document.querySelectorAll('.counter-btn-increment');
    const counts = document.querySelectorAll('.item-count');
    const price = document.querySelectorAll('.sm-price');
    const deleteBtn = document.querySelectorAll('.sm-delete-btn');

    let product = JSON.parse(localStorage.getItem('cart'));

    counts.forEach((item, i) => {
        let cost = Number(price[i].getAttribute('data-price'));

        counterMinus[i].addEventListener('click', () => {
            if(item.innerHTML > 1){
                item.innerHTML--;
                totalBill -= cost;
                price[i].innerHTML = `${item.innerHTML * cost} TL`;
                
                UptdateBill();
                product[i].item = item.innerHTML;
                localStorage.setItem('cart', JSON.stringify(product));
            }
        })
        counterPlus[i].addEventListener('click', () => {
            if(item.innerHTML < 9){
                item.innerHTML++;
                totalBill += cost;
                price[i].innerHTML = `${item.innerHTML * cost} TL`;

                UptdateBill();
                product[i].item = item.innerHTML;
                localStorage.setItem('cart', JSON.stringify(product));
            }
        })
    })

    deleteBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            product = product.filter((data, index) => index != i);
            localStorage.setItem('cart', JSON.stringify(product));
            location.reload();
        })
    })
}

setProducts('cart');