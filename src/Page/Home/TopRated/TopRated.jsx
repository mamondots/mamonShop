
import { useState } from "react";
import { useEffect } from "react";
import TopRatedDetails from "./TopRatedDetails/TopRatedDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import reviewImg01 from '../../../assets/img/review-a.png'
import reviewImg02 from '../../../assets/img/review-b.png'
import reviewImg03 from '../../../assets/img/review-c.png'

const TopRated = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://adrenelin-server-site.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <h2 className="text-xl border-b py-4 border-[#2626261d] ">TOP RATED</h2>
            <div className="lg:flex gap-8 w-full mt-8">
                <div className=" basis-3/4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-3 gap-2">
                        {

                            products.slice(0, 3).map((product, index) => <TopRatedDetails
                                key={index}
                                product={product}
                            >
                            </TopRatedDetails>)

                        }
                    </div>
                </div>
                <div className=" basis-1/3">
                    <div>
                        <div className="bg-[#DA4600] py-8 px-4">
                            <h2 className="text-xl font-medium text-white">ABOUT MAMONSHOPS.</h2>
                            <p className="py-2 text-white">MamonShops. partners with GORE-TEX® to deliver the industry’s most innovative and best waterproof, windproof and breathable weather protection clothing.</p>
                        </div>
                        <div className="border p-10 mt-4 lg:w-[60vh]">
                            <Slider {...settings}>
                                <div>
                                    <img src={reviewImg01} alt="" />
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quae sapiente ut unde eius soluta corporis veniam exercitationem? Rem temporibus veniam voluptas deserunt laudantium explicabo?</p>
                                </div>
                                <div>
                                <img src={reviewImg02} alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quae sapiente ut unde eius soluta corporis veniam exercitationem? Rem temporibus veniam voluptas deserunt laudantium explicabo?</p>
                                </div>
                                <div>
                                <img src={reviewImg03} alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quae sapiente ut unde eius soluta corporis veniam exercitationem? Rem temporibus veniam voluptas deserunt laudantium explicabo?</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRated;