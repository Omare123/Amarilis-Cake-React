import React from "react";
import Item from "../itemComponent/item";
import "./itemList.scss"

export default function ItemList({items}) {

      return (<div className="mapList">{items.map(item =>
        <Item id={item.id} name={item.name} price={item.price} imageUrl={item.url}/>
      )}</div>)
        
}