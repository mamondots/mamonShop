import { useState } from 'react';
import './Tabs.css'

const Tabs = () => {
    const [toggle,setToggle] = useState(1)
    const toggleTab = (index) =>{
        setToggle(index)
    }
    return (
        <div className="container py-12">
            <div className="bloc-tabs lg:flex  lg:space-x-6 cursor-pointer text-base font-medium ">
                <div 
                onClick={() => toggleTab(1)} 
                className={toggle === 1 ? "tabs active-tabs":"tabs"}>DESCRIPTION
                </div>

                <div 
                onClick={() => toggleTab(2)} 
                className={toggle === 2 ? "tabs active-tabs":"tabs"}>ADDITIONAL INFORMATION
                </div>

                <div onClick={() => toggleTab(3)} 
                className={toggle === 3 ? "tabs active-tabs":"tabs"}>REVIEWS
                </div>
                <div onClick={() => toggleTab(4)} 
                className={toggle === 4 ? "tabs active-tabs":"tabs"}>DELIVERY AND RETURNS INFORMATION
                </div>
            </div>
            <div className="contents-tabs mt-6">
                <div className={toggle === 1 ? "content active-content":"content"}>
                    <h2 className='font-medium'>DESCRIPTION</h2>
                    <p className='py-2 text-[#7d7d7d]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className={toggle === 2 ? "content active-content":"content"}>
                    <h2 className='font-medium'>ADDITIONAL INFORMATION</h2>
                    <div className='flex items-center justify-center'>
                    <p className='py-2 text-[#7d7d7d] text-2xl'>
                        There is no additional information
                    </p>
                    </div>
                </div>

                <div className={toggle === 3 ? "content active-content":"content"}>
                    <h2 className='font-medium'>REVIEWS</h2>
                    <div className='flex items-center justify-center'>
                    <p className='py-2 text-[#7d7d7d] text-2xl'>
                        There is no customers reviews
                    </p>
                    </div>
                </div>

                <div className={toggle === 4 ? "content active-content":"content"}>
                    <h2 className='font-medium'>DELIVERY AND RETURNS INFORMATION</h2>
                    <div className='flex items-center justify-center'>
                    <p className='py-2 text-[#7d7d7d] text-2xl'>
                    Delivery and Returns Content description.
                    </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tabs;