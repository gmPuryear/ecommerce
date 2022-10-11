import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";

function Products() {
    const API_URL = 'https://fakestoreapi.com/products';
    const [products, setProduct] = useState([]);

    // grabs products from API to display on page
    useEffect(() => {
        axios.get(API_URL)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    // creates shopping cart in local storage on page load
    useEffect(() => {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");
        }
    }, []);



    return (
        <>
            <div>
                {/*<ProductCard handleAddToCart={handleAddToCart} products={products}/>*/}
                <ProductCard products={products}/>
            </div>
        </>
    );
}

export default Products;

