import { Link } from "react-router-dom";
import Button from "../../../component/Button";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({item, img, title, details}) => {
    return (
        <div>

<Cover img={img} title={title} 
      details={details}>
      </Cover>
     <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-7'>
     {item.map(item =>  <MenuItem item={item} key={item._id}></MenuItem>)}
     </div>
           <div className="text-center my-5">
           <Link to={`/order/${title}`}>
<Button>Order now</Button>
            </Link>
           </div>
        </div>
    );
};

export default MenuCategory;