import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import api from '../services/api';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HeJN2HhLfVJZf5kTCCebfO8nhw1RA5EJKuNURYwOcsGuRtkvAxf5afJOGfi0s7UzoTZaHajjDYlVcjTcS2JCmZu00MlEFytXW';

  const onToken = token => {
    const data = {
      amount: priceForStripe,
      token,
    };

    api.post('payment', data)
      .then(response => {
        alert('Payment successful!');
      })
      .catch(error => {
        console.log("Payment error: ", error);
        alert('There was an error with the payment. Please make sure to use the provided test credit card.');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;