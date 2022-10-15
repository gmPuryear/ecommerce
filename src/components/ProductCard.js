import React from "react";
import {convertToUSDFormat} from "../utils/Money";
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import {addToCart} from "../utils/use-cart";
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import cart from "./Cart";

export const CartContext = React.createContext(undefined);

function ProductCard(props) {
    const products = props.products;
    const cartItems = props.cartItems;
    const setCartItems = props.setCartItems;

    // ESLint: 'React' is not defined.(no-undef

    // const [cartItems, setCartItems] = useState([]);


    // all products to fill in product cards
    // cartItems.products = props

    // const saveCart = () => {
    //     localStorage.setItem("cart", JSON.stringify(cartItems));
    // }
    //
    // function isInCart(productToAdd) {
    //     const inCart = cartItems.map((item) => item.id).includes(productToAdd.id);
    //     if (!inCart) {
    //         setCartItems([...cartItems, productToAdd]);
    //         saveCart();
    //     }
    // }

    const addToCart = (productToAdd) => {
        setCartItems([...cartItems, productToAdd]);
    }

    // whenever the cart changes, the cart will be saved in local storage.
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);


    const renderProductCards = products.map(product => {
        return (
            <div key={product.id} className="flex justify-center mt-8">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <div className="flex justify-center pt-6">
                        <img className="h-56 rounded-t-lg" src={product.image} alt="product"/>
                    </div>
                    <div className="p-6">
                        <h5 className="justify-center text-gray-900 text-xl font-medium mb-2">{product.title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {product.description}
                        </p>
                        <p>Price: {convertToUSDFormat(product.price)}</p>
                        <button type="button" onClick={() => addToCart(product)}
                                    className="mt-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs
                        leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
                        active:shadow-lg transition duration-150 ease-in-out">
                                Add To Cart
                            </button>
                    </div>
                </div>
            </div>
        )
    })



    return (<div>
        <div>
            <Link to="cart">
                <button className="text-red-300">
                    <FaShoppingCart/>
                </button>
            </Link>
        </div>
        {renderProductCards}
    // </div>)
}

export default ProductCard
