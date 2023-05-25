import { Outlet, useLocation } from "react-router-dom";
import Navigationbar from "../pages/Shared/Navigationbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {

    const location = useLocation();
    console.log(location.pathname)
    const noHeader = location.pathname === '/login';
    return (
        <div>
          {noHeader || <Navigationbar></Navigationbar>}
           
           <Outlet></Outlet>
           
         {noHeader ||  <Footer></Footer>}
        </div>
    );
};

export default MainLayout;