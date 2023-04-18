import {createContext,useState,useEffect} from 'react';

const addCartItem = (cartItems,productToAdd) =>{
    //find if carditems contain productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    //if found increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id===productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity+1} : cartItem
        )
    }
    //return new array with modify cart-items/new cart item
    return [...cartItems , { ...productToAdd,quantity:1 }];
}

const removeCartItem = (cartItems,cartItemToRemove) =>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id !==cartItemToRemove.id);
    }
    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id===cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity-1} : cartItem
        )
    }
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems: [],
    addItemToCart: () =>{},
    removeItemFromCart: () =>{},
    clearItemFromCart: () =>{},
    cartCount : 0,
    cartTotal :0
})
export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItem,setCartItem] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItem.reduce((total,cartItem) => total+cartItem.quantity,0)
        setCartCount(newCartCount);
    },[cartItem])

    useEffect(() => {
        const newCartTotal = cartItem.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
        setCartTotal(newCartTotal);
      }, [cartItem]);

    const addItemToCart = (productToAdd) =>{
        setCartItem(addCartItem(cartItem,productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) =>{
        setCartItem(removeCartItem(cartItem,cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItem(clearCartItem(cartItem, cartItemToClear));
      };
    const value = {isCartOpen,setIsCartOpen,addItemToCart,removeItemFromCart,clearItemFromCart,cartItem,cartCount,cartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}