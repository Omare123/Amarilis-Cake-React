import './styles/variables.scss'
import './App.scss';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/navBarComponent/navBarComponent'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailsContainer from './components/itemDetailsContainer/itemDetailsContainer'
import { CartContext } from './components/cartContext/cartContext';

export default function App() {
  const [itemDetail, setItemDetail] = useState();
  const [cart, setCart] = useState([]);
  function onAdd(item){
    console.log(item)
  }
  return (<div className='App'>
    <CartContext.Provider value={cart}>
      <Router>
        <div>
          <NavBarComponent />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/item/:id" element={<ItemDetailsContainer item={itemDetail} onAdd={onAdd} />} />
            <Route exact path="/">
              <Route exact path='/' element={<ItemListContainer setItemDetail={setItemDetail} />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>

  </div>
  )
}

