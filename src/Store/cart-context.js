import React from "react";

const CartContext = React.createContext(
    {
        cartItems: [],
        listItems: [],
    }
)

export default CartContext