import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Fotter from "../Shared/Footer/Fotter";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;