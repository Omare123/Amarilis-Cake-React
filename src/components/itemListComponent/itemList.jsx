import React from "react";
import Item from "../itemComponent/item";
import "./itemList.scss"

export default function ItemList({items, setItemDetail}) {
  
      return (<div className="mapList">{items.map(item =>
        <Item setItemDetail={setItemDetail} id={item.id} item={item}/>
      )}</div>)
        
}