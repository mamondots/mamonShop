import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import SingIn from "../Register/SingIn/SingIn";
import SingUp from "../Register/SingUp/SingUp";

import SingleProduct from "../Page/Home/SingleProduct/SingleProduct";
import ProductSection from "../ProductSection/ProductSection";
import ManSection from "../ManSection/ManSection";
import WomanSection from "../WomanSection/WomanSection";
import BlogsSection from "../BlogsSection/BlogsSection";
import Dasboard from "../Layout/Dasboard";
import AdminHome from "../Page/Home/Dasboard/AdminHome/AdminHome";
import AddProduct from "../Page/Home/Dasboard/AddProduct/AddProduct";
import ManageProducts from "../Page/Home/Dasboard/ManageProducts/ManageProducts";
import ManageCustomer from "../Page/Home/Dasboard/ManageCustomer/ManageCustomer";
import UpadtedProduct from "../Page/Home/Dasboard/UpadtedProduct/UpadtedProduct";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
          path:"/singin",
          element:<SingIn></SingIn>
        },
        {
          path:"/singup",
          element:<SingUp></SingUp>
        },
        {
          path:"/singleproduct/:id",
          element:<SingleProduct></SingleProduct>
        },
        {
          path:"/productsection",
          element:<ProductSection></ProductSection>
        },
        {
          path:"/man",
          element:<ManSection></ManSection>
        },
        {
          path:"/woman",
          element:<WomanSection></WomanSection>
        },
        {
          path:"/blogs",
          element:<BlogsSection></BlogsSection>
        }
      ] 
    },

    {
      path:'dasboard',
      element:<Dasboard></Dasboard>,
      children:[
       {
        path:'/dasboard/adminhome',
        element:<AdminHome></AdminHome>
       },
       {
        path:'/dasboard/addproduct',
        element:<AddProduct></AddProduct>
       },
       {
        path:'/dasboard/manageproducts',
        element:<ManageProducts></ManageProducts>
       },
       {
        path:'/dasboard/managecustomer',
        element:<ManageCustomer></ManageCustomer>
       },
       {
        path:'/dasboard/updatedproduct/:id',
        element:<UpadtedProduct></UpadtedProduct>
       }
      ]
    }
   

  ]);