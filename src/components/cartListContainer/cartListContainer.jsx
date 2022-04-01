import React, { useContext } from "react";
import CartListComponent from "../cartListComponent/cartListComponent";
import CartSidebarContainer from "../cartSidebarContainer/cartSidebarContainer";
import "./cartListContainer.scss"
import { ProductsContext } from '../cartContext/ProductsContext'


export default function CartListContainer() {
  const {cart , price, onMinus, onPlus} = useContext(ProductsContext)
  return (<div className="cartView">
    {cart.length > 0 ? (
    <div className="cartItemList">
      <CartListComponent items={cart} onMinus={onMinus} onPlus={onPlus} /> 
      <CartSidebarContainer price={price}/>
    </div> 
    ) : <div>No hay productos</div>}
  </div>)

}