import React from 'react';

import Button from './Button';

import '../sass/components/CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <Button>GO TO CHECKOUT</Button>
    </div>
  </div>
);

export default CartDropdown;