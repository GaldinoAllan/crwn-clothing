import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors'

import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/StripeButton';

import {
  CheckoutPageContainer,
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  Total,
  TestWarning
} from '../styles/pages/Checkout';

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutPageHeader>
      <CheckoutPageHeaderBlock>
        <span>Product</span>
      </CheckoutPageHeaderBlock>

      <CheckoutPageHeaderBlock>
        <span>Description</span>
      </CheckoutPageHeaderBlock>

      <CheckoutPageHeaderBlock>
        <span>Quantity</span>
      </CheckoutPageHeaderBlock>

      <CheckoutPageHeaderBlock>
        <span>Price</span>
      </CheckoutPageHeaderBlock>

      <CheckoutPageHeaderBlock>
        <span>Remove</span>
      </CheckoutPageHeaderBlock>
    </CheckoutPageHeader>
    {cartItems.map(cartItem =>
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    )}
    <Total>
      <span>TOTAL: ${total}</span>
    </Total>
    <TestWarning>
      *Please use the following test credit cart for payments*
      <br />
      4242 4242 4242 4242 - Exp: 09/23 - CVV: 123
    </TestWarning>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(Checkout);