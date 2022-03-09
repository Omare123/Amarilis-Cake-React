import './App.scss';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/navBarComponent/navBarComponent'
import ItemListContainer from './components/itemListContainer/itemListContainer'

export default function App() {
  const [intemsInCart, setIntemsInCart] = useState(0);

  function addToCart() {
    setIntemsInCart(intemsInCart+1)
  }
  return (<div className='App'>
    <NavBarComponent intemsInCart={intemsInCart} />
    <ItemListContainer addToCart={addToCart} />
  </div>
  )
}

