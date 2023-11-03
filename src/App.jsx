
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {

  return (
    <div className='App'>
      <NavBar />
      <h1 className='texto'>Fruticola EH</h1>
      <ItemListContainer producto="Limon" id="1" precio="120" />
      <ItemListContainer producto="Mandarina" id="2" precio="500" />
      <ItemListContainer producto="Naranja" id="3" precio="400" />
      <ItemListContainer producto="Manzana" id="4" precio="550" />
      <ItemListContainer producto="Papa" id="5" precio="800" />
    </div>
  )
}

export default App
