import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../redux/cart/cart.selectors'
import { toggleCartHidden } from '../redux/cart/cart.actions'

import CartItem from './CartItem';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  ButtonContainer
} from '../styles/components/CartDropdown';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length
          ? cartItems.map(cartItem =>
            <CartItem key={cartItem.id} item={cartItem} />
          )
          : <EmptyMessage>Your cart is empty.</EmptyMessage>
      }
    </CartItemsContainer>

    <ButtonContainer onClick={() => {
      history.push('checkout');
      dispatch(toggleCartHidden());
    }}>
      GO TO CHECKOUT
    </ButtonContainer>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));