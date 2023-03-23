import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {IProductInterfaces} from "./components/product/productInterface";
import Product from "./components/product";

function App() {
    const [product, setProduct] = useState<IProductInterfaces[]>([])
    const getProduct = async () => {
        let url = await axios.get<IProductInterfaces[]>('https://fakestoreapi.com/products')
        const {data} = await url
        await setProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    console.log(product)
    return (
        <>
            <div className="flex flex-wrap items-center justify-between">
                {
                    product.map(el => <Product product={el}/>)
                }
            </div>
        </>

    );
}

export default App;
