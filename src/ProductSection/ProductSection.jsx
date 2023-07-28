import { useEffect, useState } from "react";
import ProductDetails from "../Page/Home/Products/ProductDetails/ProductDetails";


const ProductSection = () => {

    const [products, setProducts] = useState([])
    useEffect(() =>{
            fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
            })
    },[])

    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <h2 className="text-xl border-b py-4 border-[#2626261d] ">ALL PRODUCTS</h2>
            <div className="py-8 grid lg:grid-cols-5 md:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
                 {
                   products.map((product,index) =><ProductDetails
                   key={index}
                   product={product}
                   ></ProductDetails>)
                 }
            </div>
        </div>
    );
};

export default ProductSection;