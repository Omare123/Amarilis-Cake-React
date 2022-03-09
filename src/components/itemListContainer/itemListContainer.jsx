import React from "react";
import ItemCount  from "../itemCount/itemCount";
import "./itemListContainer.scss"

export default function ItemListContainer({ addToCart }) {

  return (<div className="item">
    Mis Productos(dame click)
    <ItemCount inicial={1} stock={6} />
  </div>)

}