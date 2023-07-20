import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import logo01 from '../../../assets/img/logo-02.png'
import logo02 from '../../../assets/img/logo-03.png'
import logo03 from '../../../assets/img/logo-04.png'
import logo04 from '../../../assets/img/logo-05.png'
import logo05 from '../../../assets/img/logo-06.png'
import logo06 from '../../../assets/img/logo-07.png'
import logo07 from '../../../assets/img/logo-08.png'

const Brand = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        fade: false,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <div className="lg:px-20 md:px-12 px-8 pb-6">
            <h2 className="text-xl border-b py-4 border-[#2626261d] ">BRANDS WE STOCK</h2>
            <div className="py-12 space-x-4">
            <Slider {...settings}>
                    <div className="border">
                        <img src={logo01} alt="" />
                    </div>
                    <div className="border">
                        <img src={logo02} alt="" />
                    </div>
                    <div className="border">
                    <img src={logo03} alt="" />
                    </div>
                    <div className="border">
                    <img src={logo04} alt="" />
                    </div>
                    <div className="border">
                    <img src={logo05} alt="" />
                    </div>
                    <div className="border">
                    <img src={logo06} alt="" />
                    </div>
                    <div className="border">
                    <img src={logo07} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Brand;