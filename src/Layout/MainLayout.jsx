import { Outlet } from "react-router-dom";
import Navigationbar from "../pages/Shared/Navigationbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
           <Navigationbar></Navigationbar>
           <div>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;