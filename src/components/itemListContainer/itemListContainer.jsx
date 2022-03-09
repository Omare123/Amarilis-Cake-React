import React from "react";
import ItemCount  from "../itemCount/itemCount";

export default function ItemListContainer({ addToCart }) {

  return (<div>
    Mis Productos(dame click)
    <ItemCount inicial={1} stock={6} />
  </div>)

}