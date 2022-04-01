import React, { useContext } from "react";
import './navBarComponent.scss';
import  CartWidget from '../cartWidget/cartWidget'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../cartContext/ProductsContext'

export default function NavBarComponent(){
  const cart = useContext(ProductsContext)
      return( <nav className="navBar">
        <Link to="/"><a>Amarilis Cake (logo)</a></Link>
        <Link to="/"><a>Inicio</a></Link>
        <a>Productos</a>
        <a>Notoros</a>
        <Link to="/cart"><CartWidget number={cart.count}/></Link>
      </nav>)
}