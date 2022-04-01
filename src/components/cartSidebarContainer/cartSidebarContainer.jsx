import React, { useContext } from "react";
import "./cartSidebarContainer.scss"


export default function CartSidebarContainer({price}) {
  return (<div className="cartSidebar">
    <p>Precio total:</p>
    {'$ '+price}
  </div>)

}