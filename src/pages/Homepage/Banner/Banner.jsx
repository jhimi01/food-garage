import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner8 from '../../../assets/banner8.jpg'
import banner5 from '../../../assets/banner5.jpg'
import banner6 from '../../../assets/banner6.jpg'
import banner7 from '../../../assets/banner7.jpg'
const Banner = () => {
    
    return (


        <div>
               <Carousel   
               autoPlay
                interval={5000}
                transitionTime={2000}
                infiniteLoop
                // showStatus={false}
        showThumbs={false}
               
               >
                <div className="hero" style={{ height: '100vh', backgroundImage: `url("${banner5}")` }}>
                     <div className="hero-overlay bg-opacity-60 bg-black"></div>
                     <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-6xl font-thin font-serif">Delicious  Food</h1>
      <p className="mb-5">Welcome to our food haven, where passion meets palate, and every bite is an invitation to savor life is most delicious moments.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
                </div>
                <div className="hero" style={{ height: '100vh', backgroundImage: `url("${banner7}")` }}>
                     <div className="hero-overlay bg-opacity-60 bg-black"></div>
                     <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-6xl font-thin font-serif">Good Environment</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
                </div>
                <div className="hero" style={{ height: '100vh', backgroundImage: `url("${banner6}")` }}>
                     <div className="hero-overlay bg-opacity-60 bg-black"></div>
                     <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-6xl font-thin font-serif">Good Services</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
                </div>
                <div className="hero" style={{ height: '100vh', backgroundImage: `url("${banner8}")` }}>
                     <div className="hero-overlay bg-opacity-60 bg-black"></div>
                     <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-6xl font-thin font-serif">Good Care</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;