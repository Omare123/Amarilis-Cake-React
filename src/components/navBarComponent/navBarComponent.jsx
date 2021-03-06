import React, { useContext } from "react";
import './navBarComponent.scss';
import  CartWidget from '../cartWidget/cartWidget'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../cartContext/ProductsContext'

export default function NavBarComponent(){
  const cart = useContext(ProductsContext)
      return( <nav className="navBar">
        <Link to="/"><a>Inicio</a></Link>
        <Link to="/productos"><a>Productos</a></Link>
        <Link to="/"><div className="logo"></div></Link>
        <Link to="/nosotros"><a>Nosotros</a></Link>
        <Link to="/cart"><CartWidget number={cart.count}/></Link>
      </nav>)
}