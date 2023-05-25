import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
// import PopularItems from '../Homepage/PopularItem/PopularItems';
import banner5 from '../../assets/banner5.jpg'
import useMenu from '../../hooks/useMenu';
import MenuItem from '../Shared/MenuItem/MenuItem';
import ShareTitle from '../../component/ShareTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import { Link } from 'react-router-dom';
import Button from '../../component/Button';
// import banner7 from '../../assets/banner7.jpg'
// import banner6 from '../../assets/banner6.jpg'

const Menu = () => {

  const [menu]= useMenu();
  const offered = menu.filter(des => des.category === "offered");
  const soup = menu.filter(des => des.category === "soup");
  const dessert = menu.filter(des => des.category === "dessert");
  const pizza = menu.filter(des => des.category === "pizza");
  const salad = menu.filter(des => des.category === "salad");
  console.log(offered.length)
    return (
        <div>
                         <Helmet>
        <title>Food Garage | Menu</title>
      </Helmet>
      <Cover img={banner5} title={'OUR MENU'} 
      details={"Would you like to try a dish?"}>
      </Cover>
     <div className='mx-auto w-full md:w-5/6 my-10'>
     <ShareTitle headig={`TODAY'S OFFER`} subheading={`Don't miss`}></ShareTitle>
     <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
     {offered.map(item =>  <MenuItem item={item} key={item._id}></MenuItem>)}
     </div>
     <div className="text-center my-5">
           <Link to='/order'>
<Button>Order now</Button>
            </Link>
           </div>
     </div>


     {/* soup */}
     <div className='mx-auto w-full md:w-5/6 my-10'>
     <MenuCategory item={soup} img={banner5} title={'soup'} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
     {/* dessert */}
     </div>
     <div className='mx-auto w-full md:w-5/6 my-10'>
    
     <MenuCategory item={dessert} img={banner5} title={'dessert'} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
     </div>

     {/* pizza */}
     <div className='mx-auto w-full md:w-5/6 my-10'>
    
     <MenuCategory item={pizza} img={banner5} title={'pizza'} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
     </div>


     {/* salad */}
     <div className='mx-auto w-full md:w-5/6 my-10'>
    
     <MenuCategory item={salad} img={banner5} title={'salad'} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
     </div>


        </div>
    );
};

export default Menu;