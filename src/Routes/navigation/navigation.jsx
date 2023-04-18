import { Fragment,useContext } from "react";
import { Outlet ,Link} from "react-router-dom"
import CartIcon from "../../component/cart-icon/cart-icon";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown";
import { ReactComponent as Slogo } from '../../assets/shopify.svg';
import { UserContext } from "../../context/user.context";
import { CartContext } from '../../context/cart-context';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer,NavLinks,NavLink,LogoContainer,Span } from "./navigation.style";

import { CardContext } from "../../context/cart-context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  
    return(
      <Fragment>
        <NavigationContainer>
         <LogoContainer to='/'>
            <Slogo className='logo'/>
         </LogoContainer>
         <NavLinks>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/shop'>SHOP</NavLink>
            {/* <Link className="nav-link" to='/cart'>CART</Link>
            <Link className="nav-link" to='/wishlist'>WISHLIST</Link> */}
            {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
         </NavLinks>
         {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }
export default Navigation;
  