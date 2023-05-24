import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import PopularItems from '../Homepage/PopularItem/PopularItems';
import banner5 from '../../assets/banner5.jpg'
import banner7 from '../../assets/banner7.jpg'
import banner6 from '../../assets/banner6.jpg'

const Menu = () => {
    return (
        <div>
                         <Helmet>
        <title>Food Garage | Menu</title>
      </Helmet>
      <Cover img={banner5} title={'OUR MENU'} 
      details={"Would you like to try a dish?"}></Cover>
     <div className='md:w-5/6 w-full mx-auto'>
     <PopularItems></PopularItems>
     </div>
      <Cover img={banner6} title={'OUR MENU'} 
      details={"Would you like to try a dish?"}></Cover>
     <div className='md:w-5/6 w-full mx-auto'>
     <PopularItems></PopularItems>
     </div>
      <Cover img={banner7} title={'OUR MENU'} 
      details={"Would you like to try a dish?"}></Cover>
     <div className='md:w-5/6 w-full mx-auto'>
     <PopularItems></PopularItems>
     </div>
        </div>
    );
};

export default Menu;