import React from "react";
import ItemCount from "../itemCount/itemCount";
import "./item.scss"

export default function Item({ name, price, imageUrl }) {
  return (<div className="item">
    <div className="item__image">
      <img className="image" src={imageUrl} />
    </div>
    <div className="item__description">
      <span>{name}</span>
      <span>{price}</span>
      <ItemCount inicial={1} stock={6} />
    </div>
  </div>)

}