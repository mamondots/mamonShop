import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

const Fotter = () => {
    return (
        <div className="bg-[#111111]">
            <div className="lg:px-20 md:px-12 px-8 py-6">
                <div className="grid lg:grid-cols-4 lg:gap-4 text-white py-12 border-b-2 border-[#262626]">
                    <div>
                        <h2 className='text-xl font-semibold pb-4'>MAMONSHOPS</h2>
                        <p>Mirpur,Dhaka,Bangladesh</p>
                        <p>Email:mamonrabin@gmail.com</p>
                        <p>+8801646286477</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold pb-4'>BROWSE</h2>
                        <div className='flex space-x-12'>
                             <div>
                             <ul className='space-y-2 text-[12px] font-medium text-[#EA880D] cursor-default'>
                            <li>MEN</li>
                            <li>WOMEN</li>
                            <li>CLOTHING</li>
                            <li>BOOTS</li>
                            <li>ACCESSORIES</li>
                              </ul>
                             </div>
                             <div>
                             <ul className='space-y-2 text-[12px] font-medium text-[#EA880D] cursor-default'>
                            <li>ABOUT US</li>
                            <li>DELIVERY INFO</li>
                            <li>WHAT WE DO</li>
                            <li>COMMON FAQS</li>
                            <li>CONTACT US</li>
                        </ul>
                             </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold pb-4'>ABOUT MAMONSHOPS</h2>
                        <p className='text-[14px]'>
                        Mamonshop partners with GORE-TEX® to deliver the industry’s most innovative and best waterproof, windproof and breathable weather protection clothing.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold pb-4'>CONNECT WITH US</h2>
                        <div className='flex space-x-2'>
                            <p className='py-2 px-2 rounded-full bg-[#3A77BE] text-white'><FaFacebookF></FaFacebookF></p>
                            <p className='py-2 px-2 rounded-full bg-[#45C5F4] text-white'><FaInstagram></FaInstagram></p>
                            <p className='py-2 px-2 rounded-full bg-[#E85250] text-white'><FaLinkedinIn></FaLinkedinIn></p>
                            <p className='py-2 px-2 rounded-full bg-[#E9BD00] text-white'><FaTwitter></FaTwitter></p>
                        </div>
                        <div className='pt-4'>
                             <h2 className='text-lg font-semibold pb-2'>NEWSLETTER SIGNUP</h2>
                             <form>
                                   <input className='px-2 py-2 outline-none' type="email" name="email" placeholder='Your email address' />
                                   <input className='px-2 py-[10px] text-[14px] bg-[#D54800]' type="submit" value="Sing Up" />
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fotter;