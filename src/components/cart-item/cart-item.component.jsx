import React from 'react';

import { 
    CartItemContainer, 
    ItemDetailsContainer 
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <img src={imageUrl} style={{ width: '30%' }} alt='item' />
        <ItemDetailsContainer>
            <span className='name' style={{ fontSize: '16px' }}>{name}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;