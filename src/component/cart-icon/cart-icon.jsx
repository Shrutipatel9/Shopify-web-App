import {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { CartContext} from '../../context/cart-context';
import { Shopping,CartIconContainer,ItemCount } from './cart-icon.style';


const CartIcon = () =>{
    const {isCartOpen , setIsCartOpen,cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); 
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <Shopping />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;