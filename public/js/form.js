// redirect to home page when user exists so signup page is not shown
window.onload = () => {
    if(sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if (compareToken(user.authToken, user.email)) {
            location.replace('/');
        }
    }
}


const loader = document.querySelector('.loader');

// select inputs
 const submitBtn = document.querySelector('.submit-button');
 const name = document.querySelector('#name') || null;
 const email = document.querySelector('#email');
 const password = document.querySelector('#password');
 const number = document.querySelector('#number') || null;
 const tac = document.querySelector('#terms-and-cond') || null;

 submitBtn.addEventListener('click', () => {
    if(name != null) { // for signup page
        if(name.value.length < 3) {
            showAlert('name must be at least 3 letters');
        }
        else if(!email.value.length) {
            showAlert("enter your email correctly");
        }
        else if(password.value.length < 8) {
            showAlert('password must be at least 8 letters long');
        }
        else if(!number.value.length) {
            showAlert('enter your phone number');
        }
        else if(!Number(number.value) || number.value.length < 10) {
            showAlert('invalid phone number');
        }
        else if(!tac.checked) {
            showAlert('you must agree to our terms and conditions');
        }
        else {
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked
            })
        }
    }
    else { 
        // log in page
        if (!email.value.length || !password.value.length) {
            showAlert('please fill all the inputs.')
        }
        else {
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
 })

 // Logging in with the enter key
 document.addEventListener('keypress', (event) => {
    if(event.key == 'Enter') {
        submitBtn.click();
    }
  });
