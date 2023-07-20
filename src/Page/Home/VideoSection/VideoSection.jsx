import './VideoSection.css'
import video from '../../../assets/video/video01.mp4'

const VideoSection = () => {
    return (
        <div className='pb-10'>
            <div className='lg:h-[70vh] w-full video-box  overflow-hidden'>
                <video className='object-cover' autoPlay loop muted src={video}></video>
                <div className='z-10 absolute 
                lg:top-[32%] md:top-[30%] sm:top-[30%] top-[10%]
                lg:left-[36%] md:left-[30%] sm:left-[25%] left-[10%]
                 text-white text-center'>
                     <h2 className='lg:text-4xl md:text-4xl sm:text-4xl text-xl font-bold'>Feel the MamonShops.!</h2>
                     <p className='font-medium py-2'>Hit the waves with our latest range of clothing</p>
                     <div className=''>
                     <button className='px-6 py-2 mt-4 border-[2px] border-[#ffffffa1] hover:border-[#fff] duration-300 text-white'>VIEW MORE</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;