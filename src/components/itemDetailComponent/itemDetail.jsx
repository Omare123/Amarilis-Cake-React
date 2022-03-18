import React from "react";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.scss"

export default function ItemDetail({ item }) {
  return (<div className="itemDetails">
    <img className="itemDetails__image" src={item.imageUrl} />
    <div className="itemDetails__description">
      <span  className="itemDetails__description__name" >{item.name}</span>
      <span  className="itemDetails__description__price" >{'$'+item.price}</span>
    </div>
  </div>)

}