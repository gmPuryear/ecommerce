function ProductCard(products) {
    const productInfo = products.products;
    console.log(productInfo);


    const productCard = productInfo.map(product => {
        return (

            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <img className ="rounded-t-lg" src = {product.image} alt="product picture"/>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{product.title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {product.description}
                        </p>
                        <p>${product.price}</p>
                        <button type="button"
                                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button
                        </button>
                    </div>
                </div>
            </div>)

            // <div className="border-2 border-black" key={product.id}>
            //     <img src={product.image} alt="product picture"/>
            //     <div>{product.title}</div>
            //     <div>{product.description}</div>
            //     <div>{product.price}</div>
            // </div>)

    })

    return (<div>
        {productCard}
    </div>)
}

export default ProductCard
