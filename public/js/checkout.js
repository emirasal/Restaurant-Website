window.onload = () => {
    if(!sessionStorage.user){
        location.replace("/login");
    }
}

const placeOrderBtn = document.querySelector('.place-order-btn');
placeOrderBtn.addEventListener('click', () => {
    let address = getAdress();

    if (address) {
        // placing the orders in the firestore database
        fetch('/order', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                order: JSON.parse(localStorage.cart),
                email: JSON.parse(sessionStorage.user).email,
                add: address,
            })
        }).then(res => res.json())
        .then(data => {
            delete localStorage.cart;
            showAlert('success');
            setTimeout(() => {
                location.reload();
            }, 3000);
        })
    }

})

const getAdress = () => {
    // validations
    let address = document.querySelector('#address').value;
    let city = document.querySelector('#city').value;
    let street = document.querySelector('#street').value;
    let district = document.querySelector('#district').value;
    let buildingnumber = document.querySelector('#building-number').value;
    let desc = document.querySelector('#address-desc').value;

    if (localStorage.getItem('cart').length == 2) {
        return showAlert('your cart is empty.')
    }
    else if(!address.length || !city.length || !street.length || !district.length || !buildingnumber.length) {
        return showAlert('fill the mandatory fields');
    }
    else {
        return { address, city, street, district, buildingnumber, desc };
    }
    
}