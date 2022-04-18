import React from "react";
import { useParams } from "react-router-dom";
import './orderContainer.scss'

export default function OrderContainer() {
  let { id } = useParams();

  return (<div className="order">
    <span>Tu orden fue recibida satisfactoriamente</span>
    <span>id de la orden: {id}</span>
  </div>)

}