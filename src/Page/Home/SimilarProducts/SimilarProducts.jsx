import { useEffect, useState } from "react";
import ProductDetails from "../Products/ProductDetails/ProductDetails";


const SimilarProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
            fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
            })
    },[])
    return (
        <div className="">
        <h2 className="text-xl border-b py-4 border-[#2626261d] ">RELATED PRODUCTS</h2>
        <div className="py-8 grid lg:grid-cols-4 md:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
             {
               products.slice(0,4).map((product,index) =><ProductDetails
               key={index}
               product={product}
               ></ProductDetails>)
             }
        </div>
    </div>
    );
};

export default SimilarProducts;