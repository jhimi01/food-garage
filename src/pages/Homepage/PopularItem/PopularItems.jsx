import { useEffect, useState } from 'react';
import ShareTitle from '../../../component/ShareTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularItems = () => {
    const [menu, setMenu]= useState([]);

    useEffect(()=>{
       fetch('menu.json')
       .then(res => res.json())
       .then(data => {
        const popular = data.filter(item => item.category === 'popular')
        setMenu(popular)})
    },[])

    console.log(menu)

    return (
        <div>
            <ShareTitle
            subheading="Check it out"
            headig="FROM OUR MENU"
            ></ShareTitle>
            <div>
                {menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
        </div>
    );
};

export default PopularItems;