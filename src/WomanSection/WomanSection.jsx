import { useEffect, useState } from "react";
import ProductDetails from "../Page/Home/Products/ProductDetails/ProductDetails";


const WomanSection = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
            fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
            })
    },[])

     const Women = products.filter(product => product.category === 'Women')
    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <h2 className="text-xl border-b py-4 border-[#2626261d] ">RECOMMENDED FOR WOMAN</h2>
            <div className="py-8 grid lg:grid-cols-5 md:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
                 {
                   Women.map((product,index) =><ProductDetails
                   key={index}
                   product={product}
                   ></ProductDetails>)
                 }
            </div>
        </div>
    );
};

export default WomanSection;