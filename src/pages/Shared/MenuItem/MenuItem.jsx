const MenuItem = ({item}) => {
    console.log(item)
    const {name, image, price, recipe} = item;
    console.log(image)
    return (
            <div className="bg-base-200 p-3" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                <img className="mask mask-hexagon-2 h-20 w-20" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="menu" />
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-serif">{name}</h1>
                    <span>==============</span>
                    <h3 className="bg-yellow-600 px-2  font-bold">${price}</h3>
                </div>
                <p className="text-sm text-gray-600">{recipe}</p>
                <hr />
            </div>
    );
};

export default MenuItem;