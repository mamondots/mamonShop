import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BiCategory } from "react-icons/bi";
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
import Tabs from "./Tabs/Tabs";
import SimilarProducts from "../SimilarProducts/SimilarProducts";

const SingleProduct = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])

    const [num ,setNum] = useState(0)
    const handleIncresh = () =>{
        setNum(num+1)
    }
    const handleDecresh = () =>{
        setNum(num-1)
    }
    return (
        <div>
            <div className="bg-[#111111] cursor-pointer py-4">
                <Link to='/'>
                <h2 className="lg:px-20 md:px-12 px-8 text-[#bbb] hover:text-white duration-300">BACK TO PREVIOUS PAGE</h2>
                </Link>
            </div>
            <div className="lg:px-20 md:px-12 px-8 py-6">
           <div className="grid lg:grid-cols-2 lg:gap-12 md:gap-8 sm:gap-4 gap-2">
              <div className="border">
                <img src={products.image1} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{products.title}</h2>
                <p className="flex items-center text-[#777777] py-1">
                <Rating
                        style={{ maxWidth:80 }}
                        value={products.rating}
                        readOnly
                    />
                    ({products.rating} customer reviews)
                </p>
                <p className="text-xl text-[#D54800] py-1">$ {products.price}</p>
                <p className="mt-5 border-b-2 pb-4 text-[#777777]">{products.description}</p>
                
                <div className="py-8">
                     <div>
                        <div className="flex space-x-20">
                            <h2 className="text-xl font-medium">Color</h2>
                            <select className="border border-[#989898] px-2 py-1 lg:w-[60vh] md:w-[80vh] sm:w-[50vh] w-[30vh]  text-[#989898] overflow-hidden">
                                 <option>Choose an option</option>
                                 <option>Red</option>
                                 <option>Orange</option>
                                 <option>Yellow</option>
                                 <option>Blue</option>
                            </select>
                        </div>
                        <div className="flex space-x-20 mt-8">
                        <h2 className="text-xl font-medium">Size</h2>
                            <select className="border border-[#989898] px-2 py-1 lg:w-[60vh] md:w-[80vh] sm:w-[50vh] w-[30vh]  text-[#989898] overflow-hidden relative left-3">
                                 <option>Choose an option</option>
                                 <option>Large</option>
                                 <option>Medium</option>
                                 <option>Small</option>
                            </select>
                            
                        </div>
                     </div>

                    <div className="mt-12 flex space-x-8 cursor-pointer">
                         <button className="bg-[#D54800] font-medium text-white px-6 py-3">ADD TO CART</button>
                         <div className="flex items-center cursor-pointer">
                             <p 
                               onClick={handleDecresh} 
                               disabled={num === 0} 
                              className="text-xl font-medium border py-2 px-3 hover:bg-[#a7a7a7] duration-300">-</p>
                             <p className="text-xl font-medium border py-2 px-3">{num}
                             </p>

                             <p onClick={handleIncresh} className="text-xl font-medium border py-2 px-3 hover:bg-[#a7a7a7] duration-300">+</p>
                         </div>
                    </div>

                    <div>
                         <div className="flex items-center space-x-8 mt-5 border-b-[1px]">
                             <p className="flex items-center"><span className="pr-1"><BiCategory></BiCategory></span>SIZE GUIDE</p>
                             <p>ADD TO WISHLIST</p>
                         </div>
                         <div>
                              <p>SKU: <span className="text-[#D54800] px-1">241223</span></p>
                              <p>Categories:<span className="text-[#D54800] px-1">{products.category}</span></p>
                              <p>Tags: <span className="text-[#D54800] px-1">hoodie, warm, winter</span></p>
                              <div className="flex items-center space-x-2 mt-3">
                                  <p className="px-2 py-2 border text-[#a7a7a7] hover:bg-[#0c5fef] hover:text-white duration-300"><FaFacebookF></FaFacebookF></p>
                                  <p className="px-2 py-2 border text-[#a7a7a7] hover:bg-[#D54800] hover:text-white duration-300"><FaInstagram></FaInstagram></p>
                                  <p className="px-2 py-2 border text-[#a7a7a7] hover:bg-[#21A3F1] hover:text-white duration-300"><FaTwitter></FaTwitter></p>
                              </div>
                         </div>
                    </div>

                </div>

              </div>
           </div>
           <Tabs></Tabs>
           <SimilarProducts></SimilarProducts>
        </div>
        
        </div>
    );
};

export default SingleProduct;