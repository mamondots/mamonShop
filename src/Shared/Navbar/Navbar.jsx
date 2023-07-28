import { useContext } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import userImg from '../../assets/img/userImg.jpg'
import Headroom from 'react-headroom';


const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(result =>{
            const user = result.use
            console.log(user)
        })
    }
    return (
        <Headroom>

<div className="bg-white">
            <div className="lg:px-20 md:px-12 px-8 py-6 flex justify-between items-center">
                <div>
                    <Link to='/'>
                    <h2 className='lg:text-2xl md:text-2xl text-xl font-bold '>Mamon<span className='text-[#DA4600]'>Shops.</span></h2>
                    </Link>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex space-x-8 font-medium text-lg'>
                        <Link to='/'>
                            <li><a href="">Home</a></li>
                        </Link>
                        <Link to='/productsection'>
                        <li><a href="">Products</a></li>
                        </Link>
                        <Link to="/man">
                        <li><a href="">Man</a></li>
                        </Link>
                        <Link to='/woman'>
                        <li><a href="">Woman</a></li>
                        </Link>
                        <Link to='/blogs'>
                             <li><a href="">Blog</a></li>
                        </Link>
                        
                    </ul>
                </div>
                <div className='flex space-x-6 items-center cursor-pointer'>
                    <div className='hidden lg:block'>
                       <Link to='/dasboard/adminhome'>
                       <div className='flex space-x-4 font-medium text-2xl'>
                            <div className='flex items-center relative'>
                                <p className='absolute -right-12 top-[-8px] text-center text-[12px] rounded-full h-4 w-4  bg-[#DA4600]'></p>
                                <p><AiOutlineSearch></AiOutlineSearch></p>
                            </div>
                            <p><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                        </div>
                       </Link>
                    </div>
                    <div>

                        {
                            user ?
                                <>
                                   <div onClick={handleLogout}>
                                        {
                                            user?.photoURL?
                                            <>
                                            <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
                                            </>
                                            :
                                            <>
                                               <img className='rounded-full w-8 h-8' src={userImg} alt="" />
                                            </>
                                        }
                                   </div>
                                </>
                                :
                                <>
                                    <Link to='/singin'>
                                        <button className='lg:text-lg md:text-lg text-base font-medium lg:px-8 lg:py-2 md:px-8 md:py-2 px-6 py-2 text-white bg-[#DA4600] rounded hover:bg-transparent duration-300 border border-[#DA4600] hover:text-[#DA4600]'>Login</button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>

        </Headroom>
        
    );
};

export default Navbar;