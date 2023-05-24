import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
// import PopularItems from '../Homepage/PopularItem/PopularItems';
import banner5 from '../../assets/banner5.jpg'
import useMenu from '../../hooks/useMenu';
import MenuItem from '../Shared/MenuItem/MenuItem';
import ShareTitle from '../../component/ShareTitle';
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
     </div>


     {/* soup */}
     <div className='mx-auto w-full md:w-5/6 my-10'>
     <Cover img={banner5} title={'SOUPS'} 
      details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
      </Cover>
     <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-7'>
     {soup.map(item =>  <MenuItem item={item} key={item._id}></MenuItem>)}
     </div>

     {/* dessert */}
     </div>
     <div className='mx-auto w-full md:w-5/6 my-10'>
     <Cover img={banner5} title={'DESSERTS'} 
      details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
      </Cover>
     <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-7'>
     {dessert.map(item =>  <MenuItem item={item} key={item._id}></MenuItem>)}
     </div>
     </div>

     {/* pizza */}
     <div className='mx-auto w-full md:w-5/6 my-10'>
     <Cover img={banner5} title={'PIZZA'} 
      details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
      </Cover>
     <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-7'>
     {pizza.map(item =>  <MenuItem item={item} key={item._id}></MenuItem>)}
     </div>
     </div>


     {/* salad */}
     <div className='mx-auto w-full md:w-5/6 my-10'>
     <Cover img={banner5} title={'SALADS'} 
      details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
      </Cover>
     <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-7'>
     {salad.map(item =>  <MenuItem item={item} key={item._id}></MenuItem>)}
     </div>
     </div>


        </div>
    );
};

export default Menu;