const MenuItem = ({item}) => {
    console.log(item)
    const {name, image, price, recipe} = item;
    return (
        <div>
            <h1>{recipe}</h1>
        </div>
    );
};

export default MenuItem;