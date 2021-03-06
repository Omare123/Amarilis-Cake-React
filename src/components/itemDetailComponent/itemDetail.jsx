import React, { useState } from "react";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.scss"

export default function ItemDetail({ item }) {
  const [cantidad, setCantidad] = useState(1);

    function addToCart() {
        if (cantidad < item.stock)
            setCantidad(cantidad + 1)
    }
    function subtractToCart() {
        if (cantidad > 1)
            setCantidad(cantidad - 1)
    }
  return (<div className="itemDetails">
    <img className="itemDetails__image" src={item.url} />
    <div className="itemDetails__description">
      <span  className="itemDetails__description__name" >{item.name}</span>
      <span  className="itemDetails__description__price" >{'$'+item.price}</span>
    </div>
    { item.stock > 0 ? <ItemCount cantidad={cantidad} item={item} addToCart={addToCart} subtractToCart={subtractToCart} /> : <p>No hay stock</p>}
  </div>)

}