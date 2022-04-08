import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import "./itemCount.scss"
import { ProductsContext } from '../cartContext/ProductsContext'

export default function ItemCount({ item, cantidad, subtractToCart, addToCart }) {
    const context = useContext(ProductsContext)
    const [added, setAdded] = useState(false)
    
    function sendToCart() {
        let itemToSend = {... item}
        itemToSend["quantity"] =  cantidad
        setAdded(true)
        context.onAdd(itemToSend)
    }

    return (added ? 
        <Link to="/cart"><div className="add">Terminar compra</div></Link> :
     <div className="itemButtons">
        <div className="counter">
            <button disabled={cantidad <= 1} onClick={subtractToCart}>-</button>
            <div className="number">
                <span>{cantidad}</span>
            </div>
            <button disabled={cantidad >= item.stock} onClick={addToCart}>+</button>
        </div>
        <div className="add" onClick={sendToCart}>Agregar al carrito</div>
    </div>)

}