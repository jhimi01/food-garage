import { NavLink, Outlet } from "react-router-dom";
import { BsFillCartFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { GiHotMeal } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";
import { AiFillContacts } from "react-icons/ai";
import useCart from "../hooks/useCart";
import { FaBook, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart();

    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    console.log(isAdmin)


  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-300 text-base-content">

        { isAdmin ? <>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to='/userhome'>
              <AiFillHome />
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/dashboard/mycart">
              <FaUtensils /> ADD ITEMS
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to='payment'>
              <BsFillMenuButtonWideFill /> MANAGE ITEMS
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to='payment'>
              <FaBook /> MANAGE BOOKING
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to='/dashboard/allusers'>
              <FaUsers /> ALL USERS
            </NavLink>
          </li>
          
        </> : <>
        <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to='/userhome'>
              <AiFillHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/dashboard/mycart">
              <BsFillCartFill /> My cart
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to='payment'>
              <GiWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to='reserv'>
              <BsFillCalendarWeekFill /> Reservation
            </NavLink>
          </li>
          <div className="divider"></div>
          
        </>}
       
          <div className="divider"></div>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/">
              <AiFillHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/menu">
              <BiMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/order/salad">
              <GiHotMeal />
              order
            </NavLink>
          </li>
          <li>
            <NavLink  className={({ isActive }) => isActive ? "active" : ""} to='/contact'>
              <AiFillContacts />
              Contact
            </NavLink>
          </li>
          {/* <!-- Sidebar content here --> */}
        
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
