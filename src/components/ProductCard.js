import {convertToUSDFormat} from "../utils/Money";
import {Link} from "react-router-dom";

function ProductCard(products) {
    const productInfo = products.products;

    const addToCart = (name, price) => {
        const cartItem = {
            productName: name,
            productPrice: price
        }
    }

    const productCard = productInfo.map(product => {
        return (
            <div key={product.id} className="flex justify-center mt-8">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <div className="flex justify-center pt-6">
                        <img className="h-56 rounded-t-lg" src={product.image} alt="product picture"/>
                    </div>
                    <div className="p-6">
                        <h5 className="justify-center text-gray-900 text-xl font-medium mb-2">{product.title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {product.description}
                        </p>
                        <p>Price: {convertToUSDFormat(product.price)}</p>
                        <Link to="/cart">
                            <button type="button"
                                    className="mt-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs
                                 leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                                 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
                                 active:shadow-lg transition duration-150 ease-in-out">
                                Add To Cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    return (<div>
        {productCard}
    </div>)
}

export default ProductCard
