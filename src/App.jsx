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
import CartListContainer from './components/cartListContainer/cartListContainer'
import CartContext from './components/cartContext/cartContext'
import OrderContainer from './components/orderContainer/orderContainer'
import LocationContainer from './components/locationContainer/locationContainer'

export default function App() {
  const [itemDetail, setItemDetail] = useState();
  
  return (<div className='App'>
    <CartContext>
      <Router>
        <div>
          <NavBarComponent />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/item/:id" element={<ItemDetailsContainer item={itemDetail} />} />
            <Route exact path="/">
              <Route exact path='/' element={<ItemListContainer setItemDetail={setItemDetail} />} />
            </Route>
            <Route exact path="/cart">
              <Route exact path='/cart' element={<CartListContainer />} />
            </Route>
            <Route exact path="/nosotros">
              <Route exact path='/nosotros' element={<LocationContainer />} />
            </Route>
            <Route path="/order/:id" element={<OrderContainer/>} />
          </Routes>
        </div>
      </Router>
    </CartContext>

  </div>
  )
}

