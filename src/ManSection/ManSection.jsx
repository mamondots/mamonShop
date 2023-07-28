import { useEffect, useState } from "react";
import ProductDetails from "../Page/Home/Products/ProductDetails/ProductDetails";

const ManSection = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
            fetch('https://adrenelin-server-site.vercel.app/products')
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
            })
    },[])

     const man = products.filter(product => product.category === 'man')

    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <h2 className="text-xl border-b py-4 border-[#2626261d] ">RECOMMENDED FOR MAN</h2>
            <div className="py-8 grid lg:grid-cols-5 md:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
                 {
                   man.map((product,index) =><ProductDetails
                   key={index}
                   product={product}
                   ></ProductDetails>)
                 }
            </div>
        </div>
    );
};

export default ManSection;