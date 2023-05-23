import { Outlet } from "react-router-dom";
import Navigationbar from "../pages/Shared/Navigationbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
           <Navigationbar></Navigationbar>
           
           <Outlet></Outlet>
           
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;