import ShareTitle from '../../../component/ShareTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularItems = () => {

    const [menu] = useMenu();
    const popular = menu.filter( item => item.category === 'popular');
    // const [menu, setMenu]= useState([]);

    // useEffect(()=>{
    //    fetch('menu.json')
    //    .then(res => res.json())
    //    .then(data => {
    //     const popular = data.filter(item => item.category === 'popular')
    //     setMenu(popular)})
    // },[])

    // console.log(menu)
    

    return (
        <div className='my-20'>
            <ShareTitle
            subheading="Check it out"
            headig="FROM OUR MENU"
            ></ShareTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                {popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
        </div>
    );
};

export default PopularItems;