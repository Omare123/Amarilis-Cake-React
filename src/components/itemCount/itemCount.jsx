import React from "react";
import { useState } from "react";
import "./itemCount.scss"

export default function ItemCount({inicial, stock}) {
    const [number, setNumber] = useState(inicial);

    function addToCart() {
        if (number < stock)
            setNumber(number + 1)
    }
    function subtractToCart() {
        if (number > 0)
            setNumber(number - 1)
    }
    return (<div className="counter">
        <button onClick={subtractToCart}>-</button>
        <div className="number">
            <p>{number}</p>
        </div>
        <button onClick={addToCart}>+</button>
    </div>)

}