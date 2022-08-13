const CreateNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="/"><img src="../img/logo.png" class="logo" alt=""></a>
            <h1 class="restaurant-name">myRestaurant</h1>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search here">
                    <button class="search-button">search</button>
                </div>
                <a>
                    <img class="user-logo" src="../img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Logged in as, name</p>
                        <button class="button" id="user-button">Log out</button>
                    </div>
                </a>
                <a href="/cart"><img class="cart-logo" src="../img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="/" class="link">Home</a></li>
            <li class="link-item pizza"><a href="#pizza-start" class="link">Pizza</a></li>
            <li class="link-item burger"><a href="#burger-start" class="link">Burger</a></li>
            <li class="link-item drink"><a href="#drink-start" class="link">Drink</a></li>
            <li class="link-item dessert"><a href="#dessert-start" class="link">Dessert</a></li>
        </ul>
    `;
}

CreateNav();

// nav popoup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popouptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-button');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null) {
        // user is logged in
        popouptext.innerHTML = `logged in as, ${user.name} ✓`;
        actionBtn.innerHTML = `log out`;
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    }
    else {
        // user is not logged in
        popouptext.innerHTML = `log in to order food`;
        actionBtn.innerHTML = `log in`;
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}

// search box
const searchBtn = document.querySelector('search-button');
const searchBox = document.querySelector('search-box');
