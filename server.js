// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');


// firebase admin setup for the log in
let serviceAccount = require("./restaurant-website-aa1d9-firebase-adminsdk-eskfx-c26dfc5cda.json");
const { resolveSoa } = require('dns');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
///////


// declare static path
let staticPath = path.join(__dirname, "public");


// initializing the app
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

//signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.post('/signup', (req, res) => {
    let { name, email, password, number, tac} = req.body;

    //form validations
    if(name.length < 3) {
        return res.json({'alert': 'name must be at least 3 letters long.'})
    }
    else if(!email.length) {
        return res.json({'alert': "enter your email correctly"});
    }
    else if(password.length < 8) {
        return res.json({'alert': 'password must be at least 8 letters long'});
    }
    else if(!number.length) {
        return res.json({'alert': 'enter your phone number'});
    }
    else if(!Number(number) || number.length < 10) {
        return res.json({'alert': 'invalid phone number'});
    }
    else if(!tac) {
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }
    
    // storing the users in database
    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists) {
            return res.json({'alert': 'There is an account with this email'});
        }
        else {
            // encrypting the password before storing it to the db
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                        })
                    })
                })
            })
        }
    })
})

// login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(staticPath, "login.html"));
})

app.post('/login', (req, res) => {
    let {email, password} = req.body;

    if(!email.length || !password.length) {
        return res.json({'alert': 'fill all the inputs'});
    }

    db.collection('users').doc(email).get()
    .then(users => {
        if(!users.exists) {
            return res.json({'alert': 'email does not exists'})
        }
        else {
            bcrypt.compare(password, users.data().password, (err, result) => {
                if(result){
                    let data = users.data();
                    return res.json({
                        name: data.name,
                        email: data.email,
                    })
                }
                else {
                    return res.json({'alert': 'password is incorrect'})
                }
            })
        }
    })
})

// get products
app.post('/get-products', (req, res) => {
    let { id } = req.body;
    let docRef = db.collection('products').where('id', '==', id);

    docRef.get()
    .then( products => {
        if (products.empty){
            return res.json('no products');
        }
       
        // writing the element on a array  
        let productArr= [];
        products.forEach(item => {
            let data = item.data();
            data.id = item.id;
            productArr.push(data);
        })
        res.json(productArr[0]);
    })
}) 

// products page
app.get('/products/:id', (req, res) => {
    res.sendFile(path.join(staticPath, "product.html"));
})

app.get('/cart', (req, res) => {
    res.sendFile(path.join(staticPath, "cart.html"));
})

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(staticPath, "checkout.html"));
})

app.post('/order', (req, res) => {
    const { order, email, add } = req.body;

    let docName = email + Math.floor(Math.random() * 123113);
    db.collection('order').doc(docName).set(req.body)
    .then(data => {

        res.json('done');
    })
})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})
///////

app.listen(3000, () => {
    console.log('listening on port 3000');
})
