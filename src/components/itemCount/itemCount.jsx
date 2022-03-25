import React from "react";
import "./itemCount.scss"

export default function ItemCount({stock, cantidad, subtractToCart, addToCart}) {
    
    return (<div className="counter">
        {cantidad > 1 && <button onClick={subtractToCart}>-</button>}
        <div className="number">
            <span>{cantidad}</span>
        </div>
        {cantidad < stock && <button onClick={addToCart}>+</button>}
    </div>)

}