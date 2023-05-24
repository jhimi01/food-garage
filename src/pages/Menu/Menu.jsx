import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';

const Menu = () => {
    return (
        <div>
                         <Helmet>
        <title>Food Garage | Menu</title>
      </Helmet>
      <Cover img={"https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg?auto=compress&cs=tinysrgb&w=600"}></Cover>
        </div>
    );
};

export default Menu;