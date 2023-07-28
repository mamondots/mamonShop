import { Link, useLocation, useNavigate } from 'react-router-dom';
import videoShort from '../../assets/video/singin2.jpg'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SingUp = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser,signInWithGoogle,updateUserProfile} = useContext(AuthContext)
  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result =>{
        const startUser = result.user
        console.log(startUser)
        updateUserProfile(data.name, data.photoURL)
        .then(() =>{
            const saveUser = {name:data.name, image:data.photoURL, email:data.email}
            fetch('https://adrenelin-server-site.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
                
        })
        navigate(from, {replace:true})
    })
  };
  
       const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
            const saveUser = {name:loggedUser.displayName, image:loggedUser.photoURL, email:loggedUser.email}
            fetch('https://adrenelin-server-site.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() =>{
                
                navigate(from, {replace:true})
            })
            
        })
        
       }

    return (
        <div>
            <div className='w-full video-box  overflow-hidden'>
                <img src={videoShort}></img>
                <div className='text-white absolute lg:top-[50%] md:top-[48%] sm:top-[30%] top-[25%] left-[6%] flex space-x-4 cursor-pointer'>
                    <Link to='/'>
                        <p className='font-semibold hover:text-[#EA7910] duration-300'>Home</p>
                    </Link>
                    <Link to='/singin'>
                        <p className='font-semibold hover:text-[#EA7910] duration-300'>Sing In</p>
                    </Link>
                    <p className='font-semibold hover:text-[#EA7910] duration-300'>Sing Up</p>
                </div>
            </div>
            <div className=' py-12 lg:px-60 md:px-40 sm:px-20 px-10 lg:ml-20'>
                <form onSubmit={handleSubmit(onSubmit)} className='py-12 border flex items-center flex-col relative'>
                    <div className='text-center w-2/3'>
                        <h2 className='text-2xl font-semibold'>Sing Up</h2>
                        <p className='py-2 text-[#8f8e8e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, explicabo!</p>
                    </div>
                    <div className="form-control lg:w-3/4  w-full lg:px-0 md:px-20 sm:px-20 px-5">
                        
                           
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text"  placeholder="Enter your name" className="py-3 px-4 border rounded-md outline-none w-full" />
                                {errors.firstname && <span className='text-[red] py-1'>firstname  is required</span>}
                            
                            
                      
                    </div>
                    <div className="form-control lg:w-3/4  w-full lg:px-0 md:px-20 sm:px-20 px-5">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input {...register("email", { required: true })}  type="email" placeholder="Enter your email" className="py-3 px-4 border rounded-md outline-none w-full " />
                        {errors.email && <span className='text-[red] py-1'>email is required</span>}
                    </div>

                    <div className="form-control lg:w-3/4  w-full lg:px-0 md:px-20 sm:px-20 px-5">
                        <div className='grid lg:grid-cols-2 lg:gap-2'>
                            <div>
                                <label className="label">
                                    <span className="label-text">password</span>
                                </label>
                                <input {...register("password", { required: true,
                                minLength:6,
                                maxLength:20,
                               // pattern:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
                                })} type="password" placeholder="Enter password" className="py-3 px-4 border rounded-md outline-none w-full" />
                                {errors.password?.type === 'required' && <span className='text-[red] py-1'>password reuired</span>}
                                {errors.password?.type === 'minLength' && <span className='text-[red] py-1'>password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-[red] py-1'>password must be less 20 characters</span>}
                                
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Confoirm password</span>
                                </label>
                                <input type="password" placeholder="Enter confirm password" className="py-3 px-4 border rounded-md outline-none w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="form-control lg:w-3/4  w-full lg:px-0 md:px-20 sm:px-20 px-5">
                        <label className="label">
                            <span className="label-text">Upload Image</span>
                        </label>
                        <input {...register("photoURL", { required: true })} type="url"  placeholder="upload your image" className="py-3 px-4 border rounded-md outline-none w-full " />
                        {errors.photoURL && <span className='text-[red] py-1'>image is required</span>}
                    </div>

                    <div className='flex items-center  space-x-2 py-2 cursor-pointer  lg:w-3/4'>
                        <input type="checkbox" name="" id="" />
                        <h2 className='text-[#696868]'>Remember me</h2>
                    </div>
                    <div className="form-control lg:w-3/4  w-full lg:px-0 md:px-20 sm:px-20 px-5">
                        <input type="submit" className="py-[11px] rounded-md cursor-pointer bg-[#DA4600] hover:bg-[#da4500d1] duration-300 text-white px-4 border  w-full mt-4 outline-none" value="Sing Up" />
                    </div>
                    <div className='grid lg:grid-cols-2 lg:w-3/4 w-full lg:px-0 md:px-20 sm:px-20 px-5 py-4 lg:gap-4 text-center cursor-pointer space-y-2 lg:space-y-0'>
                        <p onClick={handleGoogle} className='flex items-center text-center py-2 lg:px-12 px-10 font-medium text-white  bg-[#E85250] hover:bg-[#e85350d4] duration-300 rounded'>Singup with google <span className='mt-1 ml-2'><FaGoogle></FaGoogle></span></p>
                        <p className='flex items-center bg-[#3A77BE] hover:bg-[#3a78bed9] duration-300 py-2  lg:px-12 px-8 font-medium text-white rounded'>Singup with facebook <span className='mt-1 ml-2'><FaFacebookF></FaFacebookF></span></p>
                    </div>
                    <p className='text-lg font-medium text-[#747474] cursor-pointer'>if you have already account <Link to='/singin'>
                        <span className='text-[#E85250]'>Sing In</span>
                    </Link> now</p>
                </form>
            </div>
        </div>
    );
};

export default SingUp;