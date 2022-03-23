import React from "react";
import './navBarComponent.scss';
import  CartWidget from '../cartWidget/cartWidget'
import { Link } from 'react-router-dom'

export default function NavBarComponent({intemsInCart}){
      return( <nav className="navBar">
        <Link to="/"><a>Amarilis Cake (logo)</a></Link>
        <Link to="/"><a>Inicio</a></Link>
        <a>Productos</a>
        <a>Notoros</a>
        <CartWidget number={intemsInCart}/>
      </nav>)
}