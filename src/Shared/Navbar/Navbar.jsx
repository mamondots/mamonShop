import { AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="lg:px-20 md:px-12 px-8 py-6 flex justify-between items-center">
            <div>
                <h2 className='lg:text-2xl md:text-2xl text-xl font-bold '>Mamon<span className='text-[#DA4600]'>Shops.</span></h2>
            </div>
            <div className='hidden lg:block'>
                 <ul className='flex space-x-8 font-medium text-lg'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Man</a></li>
                    <li><a href="">Woman</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">About us</a></li>
                 </ul>
            </div>
            <div className='flex space-x-6 items-center cursor-pointer'>
                 <div className='hidden lg:block'>
                 <div className='flex space-x-4 font-medium text-2xl'>
                      <div className='flex items-center relative'>
                        <p className='absolute -right-12 top-[-8px] text-center text-[12px] rounded-full h-4 w-4  bg-[#DA4600]'></p>
                      <p><AiOutlineSearch></AiOutlineSearch></p>
                      </div>
                      <p><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                 </div>
                 </div>
                 <div>
                     <button className='lg:text-lg md:text-lg text-base font-medium lg:px-8 lg:py-2 md:px-8 md:py-2 px-6 py-2 text-white bg-[#DA4600] rounded hover:bg-transparent duration-300 border border-[#DA4600] hover:text-[#DA4600]'>Login</button>
                 </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;