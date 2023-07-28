import { useEffect, useState } from "react";


const BlogsSection = () => {

    const [products, setProducts] = useState([])
    useEffect(() =>{
            fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
            })
    },[])

    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <h2 className="text-xl border-b py-4 border-[#2626261d] ">OUR LATEST BLOGS</h2>
            <div className="py-6">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-4 lg:space-y-0 md:space-y-0 space-y-2">
                     {
                        products.map((product,index) => <div key={index}>
                            <div>
                                <div>
                                    <img src={product.image} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-medium py-2">{product.title}</h2>
                                    <p className="font-medium">posted by {product.name}</p>
                                    <p className="py-2 text-[#797878]">{product.description}...</p>
                                    <button className="px-6 py-2 bg-[#DA4600] text-white mt-4 hover:bg-[#f71414] duration-500">READ MORE</button>
                                </div>
                            </div>
                        </div>)
                     }
                </div>
            </div>
        </div>
    );
};

export default BlogsSection;