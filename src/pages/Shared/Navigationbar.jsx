import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Button from '../../component/Button';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
const Navigationbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
    .then(()=>{}).catch(error => console.log(error.message))
  }

    const navoptions = <>
        <li className='bg-black hover:opacity-75'><Link to='/'>Home</Link></li>
        <li className='bg-black hover:opacity-75'><Link to='/menu'>Our Menu</Link></li>
        <li className='bg-black hover:opacity-75'><Link to='/order'>Our Shop</Link></li>
        <li className='bg-black hover:opacity-75'><Link to='/contact'>CONTACT US</Link></li>
        <li className='bg-black hover:opacity-75'><Link to='/dashboard'>DASHBOARD</Link></li>
        {
          user ? <>
          <li onClick={handleLogOut} className='bg-black hover:opacity-75'><Link>logOut</Link></li>
          </>:<>
          <li className='bg-black hover:opacity-75'><Link to='/login'>Login</Link></li>
          </>
        }
    </>

    

    return (
        <>
         <div className="navbar fixed z-50 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 w-52">
      {navoptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl ">
    <img  src={logo} className="h-full w-full mr-2 backdrop-blur-xl backdrop-brightness-50" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navoptions}
    </ul>
  </div>
  <div className="navbar-end">
  <Button>Get Started</Button>
  </div>
</div>   
        </>
    );
};

export default Navigationbar;