import React, { useState, useEffect } from "react";
import { ProductsContext } from "./ProductsContext";

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  function onAdd(item) {
    let productIndex = findItem(item.id)
    if (productIndex != -1) {
      const aux = [...cart]
      aux[productIndex].quantity += item.quantity;
      setCart(aux)
    }
    else
      setCart([...cart, item])
  }

  function onMinus(item) {
    let productIndex = findItem(item.id)
    if (productIndex != -1) {
      const aux = [...cart]
      if (aux[productIndex].quantity - 1 === 0) {
        aux.splice(productIndex, 1);
      }
      else
        aux[productIndex].quantity -= 1;
      setCart(aux)
    }

  }

  function onPlus(item) {
    let productIndex = findItem(item.id)
    if (productIndex != -1) {
      const aux = [...cart]
      aux[productIndex].quantity += 1;
      setCart(aux)
    }

  }

  const findItem = (itemId) => cart.findIndex(product => product.id == itemId)
  useEffect(() => {
    let elementsCount = 0
    let totalPrice = 0
    if (cart.length > 0)
      cart.forEach(product => {
        elementsCount += product.quantity
        totalPrice += product.price * product.quantity
      })
    setCount(elementsCount)
    setPrice(totalPrice)
  }, [cart]);

  return (<ProductsContext.Provider value={{ cart, onAdd, count, price, onMinus, onPlus }}>
    {children}
  </ProductsContext.Provider>)

}