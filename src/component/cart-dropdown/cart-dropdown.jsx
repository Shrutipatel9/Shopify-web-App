import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart-context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item';

import {CartDropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.style'

const CartDropdown = () => {
  const { cartItem } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () =>{
    navigate('/CheckOut')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
      {
        cartItem.length ? ( cartItem.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))) : (
            <EmptyMessage>Your cart is empty!</EmptyMessage>
          )
      }
         
      </CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;