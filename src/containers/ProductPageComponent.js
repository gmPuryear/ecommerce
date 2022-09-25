import {useEffect, useState} from "@types/react";
import axios from "axios";

function ProductPageComponent () {
    const API_URL = 'https://fakestoreapi.com/products';

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const displayDataArray = data.map(item =>
        <img height="100px" key={item.id} src={item.image} alt="pictures"/>)

    return (
        <div>
            {displayDataArray}
        </div>
    );
}

export default ProductPageComponent;

