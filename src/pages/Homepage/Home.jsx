
import Feature from "../Feature/Feature";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import MiddleSection from "./MiddleSection";
import PopularItems from "./PopularItem/PopularItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-5/6 mx-auto my-10 h-full">
            <Category></Category>
            <MiddleSection></MiddleSection>
            <PopularItems></PopularItems>
            </div>
            <Feature></Feature>
        </div>
    );
};

export default Home;