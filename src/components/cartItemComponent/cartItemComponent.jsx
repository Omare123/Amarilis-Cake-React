import React from "react";
import "./cartItemComponent.scss"

export default function CartItemComponent({ item, onMinus, onPlus}) {

  return (
      <div className="cartCard">
        <div className="cartCard__img">
          <img className="image" src={item.url} />
        </div>
        <div className="">
          <p className="cartCard__span">{item.name}</p>
          <div className="cartCard__counter">
            <button disabled={item.quantity <= 1} onClick={() => onMinus(item)}>-</button>
            <div className="cartCard__counter--number">
                <span>{item.quantity}</span>
            </div>
            <button disabled={item.quantity >= item.stock} onClick={() => onPlus(item)}>+</button>
        </div>
          <p className="cartCard__span">{'$' + item.price}</p>
        </div>
      </div>)

}