import React from "react";
import CartItemComponent from "../cartItemComponent/cartItemComponent";
import "./cartListComponent.scss"

export default function CartListComponent({items, onPlus, onMinus}) {
  
      return (<div className="cartMapList">{items.map(item =>
        <CartItemComponent id={item.id} item={item} onMinus={onMinus} onPlus={onPlus}/>
      )}</div>)
        
}