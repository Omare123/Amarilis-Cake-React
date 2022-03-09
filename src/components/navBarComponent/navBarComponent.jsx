import React from "react";
import './navBarComponent.scss';
import  CartWidget from '../cartWidget/cartWidget'
export default function NavBarComponent({intemsInCart}){
      return( <div className="navBar">
        <a>Amarilis Cake (logo)</a>
        <a>Inicio</a>
        <a>Productos</a>
        <a>Notoros</a>
        <CartWidget number={intemsInCart}/>
      </div>)
}