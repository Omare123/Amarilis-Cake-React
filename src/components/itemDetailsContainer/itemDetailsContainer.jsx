import React from "react";
import ItemDetail from "../itemDetailComponent/itemDetail";
import "./itemDetailsContainer.scss"

export default function ItemDetailsContainer({item, onAdd}) {

  return (<div className="detailsContainer">
    {item && <ItemDetail item={item} onAdd={onAdd}/>}
  </div>)

}