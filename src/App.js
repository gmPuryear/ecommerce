import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {

  return (
      <Routes>
          <Route path = "/" element = {<Products/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/checkout" element = {<Checkout/>}/>

      </Routes>
  )
}

export default App;
