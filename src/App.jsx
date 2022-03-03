import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/navBarComponent'
import ItemListContainer from './components/itemListContainer'

function App() {
  return(<div>
    <NavBarComponent/>
    <ItemListContainer/>
  </div>
  ) 
}

export default App;
