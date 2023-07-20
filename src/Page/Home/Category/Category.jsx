import categoryImg01 from '../../../assets/img/cate01.jpg'
import categoryImg02 from '../../../assets/img/cate02.jpg'
import categoryImg03 from '../../../assets/img/cate03.jpg'
import './Category.css'

const Category = () => {
    return (
        <div className="lg:px-20 md:px-12 px-8 pb-6">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-12 gap-4">
                    <div className='cate-box  group overflow-hidden'>
                        <img className='group-hover:scale-105 duration-300' src={categoryImg01} alt="" />
                        <div className='absolute lg:top-[35%] lg:left-[26%] md:top-[35%] md:left-[26%] top-[35%] left-[26%] z-10 text-white text-center'>
                             <h2 className='font-bold text-xl'>New Boards in Stock!</h2>
                             <button className='px-6 py-2 mt-4 border-[2px] border-[#ffffffa1] hover:border-[#fff] duration-300'>VIEW RANGE</button>
                        </div>
                    </div>
                    <div className='cate-box  group overflow-hidden'>
                    <img className='group-hover:scale-105 duration-300' src={categoryImg02} alt="" />
                    <div className='absolute top-[35%] left-[26%] z-10 text-white text-center'>
                             <h2 className='font-bold text-xl'>30% off Ski Wear!</h2>
                             <button className='px-6 py-2 mt-4 border-[2px] border-[#ffffffa1] hover:border-[#fff] duration-300'>VIEW RANGE</button>
                        </div>
                    </div>
                    <div className='cate-box  group overflow-hidden'>
                    <img className='group-hover:scale-105 duration-300' src={categoryImg03} alt="" />
                    <div className='absolute top-[35%] left-[30%] z-10 text-white text-center'>
                             <h2 className='font-bold text-xl'>Hit the Waves!</h2>
                             <button className='px-6 py-2 mt-4 border-[2px] border-[#ffffffa1] hover:border-[#fff] duration-300'>VIEW RANGE</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Category;