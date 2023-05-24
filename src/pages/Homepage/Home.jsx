
import { Helmet } from "react-helmet-async";
import Feature from "../Feature/Feature";
import Testimonial from "../Shared/Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import MiddleSection from "./MiddleSection";
import Number from "./Number";
import PopularItems from "./PopularItem/PopularItems";
import Recomands from "./Recommands/Recomands";

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Food Garage | Home</title>
      </Helmet>
            <Banner></Banner>
            <div className="w-full md:w-5/6 mx-auto my-10 h-full">
            <Category></Category>
            <div className="my-36">
            <MiddleSection></MiddleSection>
            </div>
            <PopularItems></PopularItems>
            <Number></Number>
            <Recomands></Recomands>
            </div>

            <Feature></Feature>
            <div className="w-full md:w-5/6 mx-auto">
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;