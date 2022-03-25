import './styles/variables.scss'
import './App.scss';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/navBarComponent/navBarComponent'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailsContainer from './components/itemDetailsContainer/itemDetailsContainer'

export default function App() {
  const [itemDetail, setItemDetail] = useState();

  return (<div className='App'>
    
    <Router>
      <div>
      <NavBarComponent />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes> 
          <Route path="/item/:id"element={<ItemDetailsContainer item={itemDetail} />}/> 
          <Route exact path="/">
            <Route exact path='/' element={ <ItemListContainer setItemDetail={setItemDetail} />}/> 
          </Route>
        </Routes>
      </div>
    </Router>
  </div>
  )
}

