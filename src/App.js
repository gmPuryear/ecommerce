import './css/App.css';
import {Route, Routes} from 'react-router-dom';
import Products from "./components/Products";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";


function App() {
    // If no other routes match, then it will render out the "not Found" page
    // {/*<Route path = "/cart" element = {<Cart/>}/>*/}
    return (
        <Routes>

            <Route element={<Header/>}>
                <Route path="/" element={<Products/>}/>


                <Route path="/checkout" element={<Checkout/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>

        </Routes>
    )
}

export default App;
