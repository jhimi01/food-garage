import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpg'
const Banner = () => {
    
    return (
        <div>
               <Carousel   autoPlay
                interval={3000}
                transitionTime={500} // Set the transition duration in milliseconds
                showThumbs={false} // Hide the thumbnail navigation
                showIndicators={false} // Hide the indicator dots
                infiniteLoop // Enable infinite loop
               >
                <div style={{height: '100vh'}} className="hero">
                    <img style={{ width: '100%', height: '100%' }} src={banner1} />
                    <div className="hero-overlay bg-opacity-60"></div>
                </div>
                <div style={{height: '100vh'}} className="hero">
                    <img style={{ width: '100%', height: '100%' }} src={banner2} />
                    <div className="hero-overlay bg-opacity-30"></div>
                </div>
                <div style={{height: '100vh'}} className="hero">
                    <img style={{ width: '100%', height: '100%' }} src={banner3} />
                    <div className="hero-overlay bg-opacity-30"></div>
                </div>
                <div style={{height: '100vh'}} className="hero">
                    <img style={{ width: '100%', height: '100%' }} src={banner4} />
                    <div className="hero-overlay bg-opacity-30"></div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;