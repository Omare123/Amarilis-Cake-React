import React, { useState } from "react";
import "./cartSidebarContainer.scss"


export default function CartSidebarContainer({price, buy}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [direction, setDirection] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    buy(name, phone, mail, direction)
  }

  return (<div className="cartSidebar">
    <form className="cartSidebar__form" onSubmit={handleSubmit}>
      <label className="cartSidebar__form__input">Nombre:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="cartSidebar__form__input">Teléfono:
        <input 
          type="text" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label className="cartSidebar__form__input" >Mail:
        <input 
          type="email" 
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </label>
      <label className="cartSidebar__form__input" >Dirección:
        <input 
          type="text" 
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        />
      </label>
      <input type="submit" value="Pagar" />
    </form>
    <p>Precio total:</p>
    {'$ '+price}
  </div>)

}