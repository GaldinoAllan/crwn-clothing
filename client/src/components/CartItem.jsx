import React from 'react';

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
} from '../styles/components/CartItem';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} X ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;