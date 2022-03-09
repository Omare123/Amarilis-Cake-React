import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./cartWidget.scss"

export default function CartWidget({number}) {

      return (<button>
          <FaShoppingCart/>
          <p>{number}</p>
        </button>)
        
}