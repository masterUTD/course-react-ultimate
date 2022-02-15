import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // cause stripe wants the price in cents
    const publishableKey = 'pk_test_51IWBgjExUpnN3Baw0GYgjuDaK0vk7uPITAwFY2CPBodGwF5RC8tkd5wWjDHfBNRNuIqynbPuSios9tk8WGCLq4mi00ClwSiHFC';

    const onToken = token => { // este parametro token me lo pasa stripe con los campos que lleno nuetro usuario en el formulario de stripe
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert(`payment exitoso` )
        }).catch(error => {
            console.log('payment error: ', JSON.parse(error));
            alert('there was an issue with your payment')
        })

    }

    return ( // si es un componente pero a la final es solo un button
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN CLOTHING LTD.'
            billingAddress
            shippingAddress
            image = 'https://www.festisite.com/static/partylogo/img/logos/manchester-united.png'
            description = { `Your total is  $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay right now'
            token = {onToken}
            stripeKey = {publishableKey}

        />


    );


};


export default StripeCheckoutButton;