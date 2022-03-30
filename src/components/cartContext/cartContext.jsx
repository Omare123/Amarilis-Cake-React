import React, { useState } from "react";
import { ProductsContext } from "./ProductsContext";

export default function CartContext({ children }) {
    const [cart, setCart] = useState([]);
    function onAdd(item){
      let productIndex = cart.findIndex(product => product.id == item.id)  
      if(productIndex != -1){
        cart[productIndex].quantity += item.quantity;
        setCart(cart)
      }
      else
        setCart([...cart,item])
      console.log("CARRO", cart)
    }
    return (<ProductsContext.Provider value={{cart, onAdd}}>
        {children}
    </ProductsContext.Provider>)
  
  }