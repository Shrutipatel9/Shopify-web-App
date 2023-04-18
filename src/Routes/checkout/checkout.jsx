import { useContext } from 'react';

import { CartContext } from '../../context/cart-context';

import CheckoutItem from '../../component/checkout-item/checkout-item';

import './checkout.scss';

const Checkout = () => {
  const { cartItem, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
    <h2>Checkout Here</h2>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove Item</span>
        </div>
      </div>
      {cartItem.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;