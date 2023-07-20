import firstImg from '../../../assets/img/New Project.jpg'
import firstImg2 from '../../../assets/img/hill02.jpg'
import firstImg3 from '../../../assets/img/sub01.jpg'
import firstImg4 from '../../../assets/img/sub02.jpg'

const Extapart = () => {
    return (
        <div className="lg:px-20 md:px-12 px-8 py-6">
            <div className="lg:flex w-full gap-8 space-y-4 lg:space-y-0">
                <div className="cate-box basis-1/3">
                    <img className='h-full' src={firstImg} alt="" />
                    <div className='text-center absolute lg:top-[40%] lg:left-5 md:top-[50%] md:left-[26%] sm:top-[50%] sm:left-[20%] top-[40%] left-[8%] z-10 px-8'>
                        <h2 className='text-2xl font-bold text-white'>See how our products are made</h2>
                        <button className='px-6 py-2 mt-4 border-[2px] border-[#ffffffa1] hover:border-[#fff] duration-300 text-white'>VIEW MORE</button>
                    </div>
                </div>
                <div className="basis-2/3">
                    <div>
                        <div className="bg-[#262626] cate-box">
                            <img className='w-full' src={firstImg2} alt="" />
                            <div className='text-center absolute Z-10 lg:top-[30%] md:top-[30%] top-[25%] lg:left-[20%] md:left-[30%] sm:left-[25%] left-[5%]'>
                                <h2 className='lg:text-2xl md:text-xl sm:text-lg text-base font-bold text-white'>Free shipping when you spend over $100</h2>
                                <div className='hidden lg:block md:block sm:block'>
                                    <button className='lg:px-6 lg:py-2  md:px-6 md:py-2 px-4 py-2 lg:mt-4 md:mt-2 mt-1 border-[2px] border-[#ffffffa1] hover:border-[#fff] duration-300 text-white'>VIEW MORE</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-4 mt-2">
                            <div className="cate-box">
                                <img src={firstImg3} alt="" />
                                <div className='absolute z-10 lg:top-[28%] md:top-[40%] sm:top-[40%] top-[30%]
                                lg:left-[20%] md:left-[32%] sm:left-[30%] left-[20%] text-center text-white'>
                                    <h2 className='lg:text-2xl  md:text-3xl sm:text-2xl font-bold'>See the Latest Range</h2>
                                    <button className='px-6 py-2 mt-4 border-[2px] border-[#ffffffa1] hover:border-[#fff] duration-300 text-white'>VIEW MORE</button>
                                </div>
                            </div>
                            <div className="cate-box">
                                <img src={firstImg4} alt="" />
                                <div className='absolute z-10 lg:top-[28%] md:top-[40%] sm:top-[40%] top-[30%]
                                lg:left-[20%] md:left-[32%] sm:left-[30%] left-[20%] text-center text-white'>
                                    <h2 className='lg:text-2xl  md:text-3xl sm:text-2xl font-bold'>Winter Wear Range</h2>
                                    <button className='px-6 py-2 mt-4 border-[2px] border-[#ffffffa1] hover:border-[#fff] duration-300 text-white'>VIEW MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extapart;