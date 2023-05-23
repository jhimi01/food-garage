
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-5/6 mx-auto h-[60vh] mb-32">
            
            <Category></Category>
            </div>
        </div>
    );
};

export default Home;