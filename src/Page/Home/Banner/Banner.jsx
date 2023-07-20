import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import bannerImg01 from '../../../assets/img/banner01.webp'
import bannerImg02 from '../../../assets/img/banner02.jpg'
import bannerImg03 from '../../../assets/img/banner03.jpg'
import './Banner.css'

const Banner = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="">
            <div className="pb-12 relative">
                <Slider {...settings}>
                    <div>
                        <img className="w-full" src={bannerImg01} alt="" />
                        <div className="absolute lg:top-[26%] lg:left-[30%] text-white text-center">
                            <p className="text-xl font-semibold py-4 sub-title">FREE SHIPPING ON ORDERS OVER $100!</p>
                            <h2 className="text-6xl font-bold py-8 leading-[65px]">WHAT TO WEAR &<br/> PACK FOR HIKING</h2>
                            <button className="px-10 py-4 bg-white text-[#262626] text-lg font-medium border hover:bg-transparent duration-300 hover:text-[#fff]">SHOP NOW</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-full" src={bannerImg02} alt="" />
                        <div className="absolute lg:top-[26%] md:top-[20%] top-[10%] lg:left-[30%] text-white text-center">
                            <p className="text-xl font-semibold py-4 sub-title">FREE SHIPPING ON ORDERS OVER $100!</p>
                            <h2 className="text-6xl font-bold py-8 leading-[65px]">GET ACTIVE:<br/>WINTER COLLECTION</h2>
                            <button className="px-10 py-4 bg-white text-[#262626] text-lg font-medium border hover:bg-transparent duration-300 hover:text-[#fff]">SHOP NOW</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-full" src={bannerImg03} alt="" />
                        <div className="absolute lg:top-[26%] lg:left-[30%] text-white text-center">
                            <p className="text-xl font-semibold py-4 sub-title">FREE SHIPPING ON ORDERS OVER $100!</p>
                            <h2 className="text-6xl font-bold py-8 leading-[65px]">HOT NEW <br/>RANGE IN STOCK!</h2>
                            <button className="px-10 py-4 bg-white text-[#262626] text-lg font-medium border hover:bg-transparent duration-300 hover:text-[#fff]">SHOP NOW</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Banner;