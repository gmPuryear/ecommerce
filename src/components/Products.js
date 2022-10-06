import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";

function Products() {
    const API_URL = 'https://fakestoreapi.com/products';

    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");
        }
    }, [])


    // console.log(productInfo[0]);

    // const displayDataArray = productData.map(item =>
    //     <img className="h-40" key={item.id} src={item.image} alt="pictures"/>)
    return (
        <>
            <div>
                <Link to="cart">
                    <button className="text-red-300">
                        <FaShoppingCart/>
                    </button>
                </Link>
            </div>
            <div>
                {products && <ProductCard products={products}/>}
            </div>
        </>
    )
        ;
}

export default Products;

