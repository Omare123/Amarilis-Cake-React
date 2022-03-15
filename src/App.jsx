import './App.scss';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/navBarComponent/navBarComponent'
import ItemListContainer from './components/itemListContainer/itemListContainer'

export default function App() {
  const [intemsInCart, setIntemsInCart] = useState(0);

  return (<div className='App'>
    <NavBarComponent intemsInCart={intemsInCart} />
    <ItemListContainer />
  </div>
  )
}

