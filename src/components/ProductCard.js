import {convertToUSDFormat} from "../utils/Money";
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import {addToCart} from "../utils/use-cart";
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import cart from "./Cart";

// function ProductCard({handleAddToCart}, products) {
function ProductCard(products) {
    const [cartItems, setCartItems] = useState([]);

    // all
    const productInfo = products.products;
    // const addToCartProduct = handleAddToCart;
    // const addToCart = handleAddToCart;
    // handleAddToCart = addToCart();
    //  const addToCart = (product) => {
    //     setCartItems([...cartItems, product])
    // };




    const renderProductCards = productInfo.map(product => {
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
                            <button type="button" onClick={() => isInCart(product)}
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

    function isInCart(productToAdd){
        const isInCart = cartItems.map((item) => item.id).includes(productToAdd.id);
        if (!isInCart) {
            setCartItems([...cartItems, productToAdd]);
            // localStorage.setItem("cart", JSON.stringify(cartItems));
            // saveCart();
        }
    }
    console.log(cartItems);

    const saveCart = () => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    return (<div>
        <div>
            <Link to="cart">
                <button className="text-red-300">
                    <FaShoppingCart/>
                </button>
            </Link>
        </div>
        {renderProductCards}
    </div>)
}

export default ProductCard
