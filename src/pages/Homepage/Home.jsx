
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import MiddleSection from "./MiddleSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-5/6 mx-auto my-10 h-full">
            <Category></Category>
            <MiddleSection></MiddleSection>
            </div>
        </div>
    );
};

export default Home;