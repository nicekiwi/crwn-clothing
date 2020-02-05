import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? 
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) : (
                        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                    )
            }
        </CartItemsContainer>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </CartDropdownContainer>
)

export default CartDropdown;