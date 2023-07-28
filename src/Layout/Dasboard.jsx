
import { NavLink, Outlet } from "react-router-dom";
import useImg from '../assets/img/userImg.jpg'

import { FaHome } from 'react-icons/fa';
import { VscDiffAdded } from 'react-icons/vsc';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { MdSettingsSuggest } from 'react-icons/md';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";



const Dasboard = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

   

    //const idAdmin = true

    const isAdmin = true

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary absolute left-20 drawer-button lg:hidden">*</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="flex flex-col items-center px-4 py-8  lg:w-80 h-full bg-base-200 text-base-content">

                    {
                        isAdmin ?
                            <>

                                <li className="flex items-center flex-col">
                                    <img className="lg:w-[40%] w-[20%] rounded-full py-4" src={user?.photoURL} alt="" />
                                    <h2 className="text-lg font-medium">{user?.displayName}</h2>
                                    <p>{user?.email}</p>
                                </li>
                                <div className="py-4 space-y-2 cursor-pointer">

                                    <li className="flex items-center space-x-1 font-medium"><NavLink to='/dasboard/adminhome'><a className="flex items-center space-x-2 font-medium"> <span className="pr-1"><FaHome></FaHome></span>Admin Home</a></NavLink></li>


                                    <li><NavLink to='/dasboard/addproduct'><a className="flex items-center space-x-1 font-medium"><span className="pr-1"><VscDiffAdded></VscDiffAdded></span>Add Products</a></NavLink></li>


                                    <li><NavLink to='/dasboard/manageproducts'><a className="flex items-center space-x-1 font-medium"><span className="pr-1"><BiBriefcaseAlt2></BiBriefcaseAlt2></span> Manage Products</a></NavLink></li>


                                    <li><NavLink to='/dasboard/managecustomer'><a className="flex font-medium"><span className="pr-1"><MdOutlineManageAccounts></MdOutlineManageAccounts></span> Manage Customer</a> </NavLink></li>

                                    <div className="space-y-2">

                                        <li><NavLink to='/'><a className="flex items-center  font-medium"><span><FaHome className="pr-1"></FaHome></span> Home</a></NavLink></li>

                                        <li><a className="flex items-center font-medium"><span className="pr-1"><MdSettingsSuggest></MdSettingsSuggest></span>Profile setting</a></li>
                                    </div>
                                </div>

                            </>
                            :
                            <>

                                <li className="flex items-center flex-col">
                                    <img className="lg:w-[40%] w-[20%] rounded-full py-4" src={useImg} alt="" />
                                    <h2 className="text-lg font-medium">Al Mamon</h2>
                                    <p>mamonrabin@gmail.com</p>
                                </li>
                                <div className="py-4 space-y-2 cursor-pointer">

                                    <li className="flex items-center space-x-1 font-medium"><NavLink to='/dasboard/userhome'><a className="flex items-center space-x-2 font-medium"> <span className="pr-1"><FaHome></FaHome></span>User Home</a></NavLink></li>


                                    <li><NavLink to='/dasboard/yourproducts'><a className="flex items-center space-x-1 font-medium"><span className="pr-1"><BiBriefcaseAlt2></BiBriefcaseAlt2></span> Your Products</a></NavLink></li>


                                    <li><NavLink to='/dasboard/review'><a className="flex font-medium"><span className="pr-1"><MdOutlineManageAccounts></MdOutlineManageAccounts></span>Review</a> </NavLink></li>

                                    <div className="space-y-2">

                                        <li><NavLink to='/'><a className="flex items-center  font-medium"><span><FaHome className="pr-1"></FaHome></span> Home</a></NavLink></li>

                                        <li><a className="flex items-center font-medium"><span className="pr-1"><MdSettingsSuggest></MdSettingsSuggest></span>Profile setting</a></li>
                                    </div>
                                </div>

                            </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dasboard;