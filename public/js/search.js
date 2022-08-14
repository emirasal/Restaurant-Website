const searchKey = decodeURI(location.pathname.split('/').pop());

const searchSpanElement = document.querySelector('#search-key');
searchSpanElement.innerHTML = searchKey;

const results = document.querySelector('.card-container');

if (searchKey == 'pizza' || searchKey == 'pizzas' || searchKey == 'margarita') {
    results.innerHTML =  `
    <button class="pre-button"><img src="../img/arrow.png" alt=""></button>
        <button class="next-button"><img src="../img/arrow.png" alt=""></button>

        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <a href="/products/pizza1"><img src="../img/products/pizza1.png" class="product-thumb" alt=""></a>
                    <h3 class="product-name">BBQ Pizza</h3>
                    <h3 class="product-price">61 TL</h3>
                </div>
            </div>
            <!--2nd product-->
            <div class="product-card">
                <div class="product-image">
                    <a href="/products/pizza2"><img src="../img/products/pizza2.png" class="product-thumb" alt=""></a>
                    <h3 class="product-name">Margarita Pizza</h3>
                    <h3 class="product-price">40 TL</h3>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <a href="/products/pizza3"><img src="../img/products/pizza3.png" class="product-thumb" alt=""></a>
                    <h3 class="product-name">Pepperoni Pizza</h3>
                    <h3 class="product-price" id="burger-start">56 TL</h3>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <a href="/products/pizza4"><img src="../img/products/pizza4.png" class="product-thumb" alt=""></a>
                    <h3 class="product-name">Vegan Pizza</h3>
                    <h3 class="product-price">53 TL</h3>
                </div>
            </div>

        </div>
`;
}
else if(searchKey == 'burger' || searchKey == 'burgers' || searchKey == 'hamburger') {
    results.innerHTML = `
        <button class="pre-button"><img src="../img/arrow.png" alt=""></button>
        <button class="next-button"><img src="../img/arrow.png" alt=""></button>

        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <a href="/products/burger1"><img src="../img/products/burger1.png" class="product-thumb" alt=""></a>
                    <h3 class="product-name">Cheese Burger</h3>
                    <h3 class="product-price">57 TL</h3>
                </div>
            </div>
            <!--2nd product-->
            <div class="product-card">
                <div class="product-image">
                    <a href="/products/burger2"><img src="../img/products/burger2.png" class="product-thumb" alt=""></a>
                    <h3 class="product-name">Chicken Burger</h3>
                    <h3 class="product-price">42 TL</h3>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <a href="/products/burger3"><img src="../img/products/burger3.png" class="product-thumb" alt=""></a>
                    <h3 class="product-name">Kasap Burger</h3>
                    <h3 class="product-price" id="drink-start">65 TL</h3>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <a href="/products/burger4"><img src="../img/products/burger4.png" class="product-thumb" alt=""></a>
                    <h3 class="product-name">Medium Burger</h3>
                    <h3 class="product-price" id="drink-start">60 TL</h3>
                </div>
            </div>

        </div>
    `;
}
else if (searchKey == 'drink' || searchKey == 'drink' || searchKey == 'cola' || searchKey == 'water') {
    results.innerHTML = `
    <button class="pre-button"><img src="../img/arrow.png" alt=""></button>
    <button class="next-button"><img src="../img/arrow.png" alt=""></button>

    <div class="product-container">
        <div class="product-card">
            <div class="product-image">
                <a href="/products/drink1"><img src="../img/products/drink1.png" class="product-thumb" alt=""></a>
                <h3 class="product-name">Pepsi 330 ml</h3>
                <h3 class="product-price">12 TL</h3>
            </div>
        </div>
        <!--2nd product-->
        <div class="product-card">
            <div class="product-image">
                <a href="/products/drink2"><img src="../img/products/drink2.png" class="product-thumb" alt=""></a>
                <h3 class="product-name">Ayran</h3>
                <h3 class="product-price">7 TL</h3>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <a href="/products/drink3"><img src="../img/products/drink3.png" class="product-thumb" alt=""></a>
                <h3 class="product-name">Ice Tea 1 L</h3>
                <h3 class="product-price">16 TL</h3>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <a href="/products/drink4"><img src="../img/products/drink4.png" class="product-thumb" alt=""></a>
                <h3 class="product-name">Pepsi 1 L</h3>
                <h3 class="product-price">18 TL</h3>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <a href="/products/drink5"><img src="../img/products/drink5.png" class="product-thumb" alt=""></a>
                <h3 class="product-name">Water 500 ml</h3>
                <h3 class="product-price" id="dessert-start">5 TL</h3>
            </div>
        </div>

    </div>
    `;
}
else if (searchKey == 'dessert' || searchKey == 'desserts') {
    results.innerHTML = `
    <button class="pre-button"><img src="../img/arrow.png" alt=""></button>
    <button class="next-button"><img src="../img/arrow.png" alt=""></button>

    <div class="product-container">
        <div class="product-card">
            <div class="product-image">
                <a href="/products/dessert1"><img src="../img/products/dessert1.png" class="product-thumb" alt=""></a>
                <h3 class="product-name">Suffle</h3>
                <h3 class="product-price">30 TL</h3>
            </div>
        </div>
        <!--2nd product-->
        <div class="product-card">
            <div class="product-image">
                <a href="/products/dessert2"><img src="../img/products/dessert2.png" class="product-thumb" alt=""></a>
                <h3 class="product-name">Kunefe</h3>
                <h3 class="product-price">36 TL</h3>
            </div>
        </div>

    </div>
    `;
}
else {
    results.innerHTML = `<h2 class="no-result">Nothing is found, try a different keyword.</h2>`
}
