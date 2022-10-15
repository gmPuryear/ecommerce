import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";

function Products() {
    const API_URL = 'https://fakestoreapi.com/products';
    const [products, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // grabs products from API to send to product card to display products
    useEffect(() => {
        axios.get(API_URL)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));

        // creates shopping cart in local storage on page load if cart does not exist
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");
        }
    }, []);

    return (
        <>
            <div>
                <ProductCard products={products}
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                />
                {/*<ProductCard handleAddToCart={handleAddToCart} products={products}/>*/}
            </div>
        </>
    );
}

export default Products;

