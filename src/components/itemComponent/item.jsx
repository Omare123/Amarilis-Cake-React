import React from "react";
import ItemCount from "../itemCount/itemCount";
import { Link } from 'react-router-dom'
import "./item.scss"

export default function Item({ id, name, price, imageUrl, setItemDetail }) {
  function selectItem(){
    setItemDetail({
      name: name,
      price: price,
      imageUrl: imageUrl
    })
  }
  return (<Link to={`/item/${id}`}><div onClick={selectItem} className="item">
  <div className="item__image">
    <img className="image" src={imageUrl} />
  </div>
  <div className="item__description">
    <span>{name}</span>
    <span>{price}</span>
    <ItemCount inicial={1} stock={6} />
  </div>
</div></Link>)

}