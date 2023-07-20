import { useState } from "react";
import { useEffect } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";



const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
            fetch('Products.json')
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
            })
    },[])
    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <h2 className="text-xl border-b py-4 border-[#2626261d] ">RECOMMENDED FOR YOU</h2>
            <div className="py-8 grid lg:grid-cols-5 md:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
                 {
                   products.slice(0,5).map((product,index) =><ProductDetails
                   key={index}
                   product={product}
                   ></ProductDetails>)
                 }
            </div>
        </div>
    );
};

export default Products;