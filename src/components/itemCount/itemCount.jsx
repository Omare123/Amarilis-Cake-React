import React, { useContext } from "react";
import "./itemCount.scss"
import { ProductsContext } from '../cartContext/ProductsContext'

export default function ItemCount({ item, cantidad, subtractToCart, addToCart }) {
    const context = useContext(ProductsContext)
    
    function sendToCart() {
        let itemToSend = {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.url,
            quantity: cantidad,
        }
        context.onAdd(itemToSend)
    }

    return (<div className="itemButtons">
        <div className="counter">
            {cantidad > 1 && <button onClick={subtractToCart}>-</button>}
            <div className="number">
                <span>{cantidad}</span>
            </div>
            {cantidad < item.stock && <button onClick={addToCart}>+</button>}
        </div>
        <div className="add" onClick={sendToCart}>Agregar al carrito</div>
    </div>)

}