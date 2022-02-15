const express = require('express')
const cors = require('cors'); // cross origin resource sharing
const bodyParser = require('body-parser');
const path = require('path')


if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors());// this server can be connected from any origin domain

if(process.env.NODE_ENV === 'production'){ // serving the statics file when in production
    app.use(express.static(path.join(__dirname, 'client/build')));// cuando ejecuto yarn build me crea una carpeta build 

    app.get('*', function(req, res, next){ // a todas las rutas , por que mi aplicacion es un solo bundle
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))

    })

}; 

app.listen(port , error => {
    if(error) throw error;
    console.log('server listening on port ', + port)

});

app.post('/payment', (req, res, next) =>  {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency : 'usd'

    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).send({ error: stripeErr });

        }
        else {
            res.status(200).send({ success: stripeRes });

        }

    });

});