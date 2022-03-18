import './App.scss';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/navBarComponent/navBarComponent'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailsContainer from './components/itemDetailsContainer/itemDetailsContainer'

export default function App() {
  const [itemDetail, setItemDetail] = useState();

  return (<div className='App'>
    <NavBarComponent />
    <ItemListContainer setItemDetail={setItemDetail} />
    {itemDetail && <ItemDetailsContainer item={itemDetail} />}
  </div>
  )
}

