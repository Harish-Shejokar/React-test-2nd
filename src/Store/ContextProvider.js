import React,{useContext, useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [list, setList] = useState([])
    const crtx = useContext(CartContext)
    
     
       const addListItemHandler = (item) => {
         setList({ ...list, item });
       };
       
    
     const context = {
       addCartItems: [],
         addListItems: list,
         addListItem: addListItemHandler,
     };
    console.log(list)
    
    return (

        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>

    )
}

export default CartProvider;