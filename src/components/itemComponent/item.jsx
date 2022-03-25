import React from "react";
import { Link } from 'react-router-dom'
import "./item.scss"

export default function Item({ item, setItemDetail }) {
  function selectItem() {
    setItemDetail(item)
  }
  return (
    <Link to={`/item/${item.id}`}>
      <div onClick={selectItem} className="card">
        <div className="card__img">
          <img className="image" src={item.url} />
        </div>
        <div className="">
          <p className="card__span">{item.name}</p>
          <p className="card__span">{'$' + item.price}</p>
        </div>
      </div>
    </Link>)

}