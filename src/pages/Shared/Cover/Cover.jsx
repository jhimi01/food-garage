import { Parallax } from 'react-parallax';

const Cover = ({img, title, details}) => {
    return (

      <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
  >
     <div className="hero h-[450px]">
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" px-10 py-5 backdrop-blur-sm backdrop-brightness-50 text-gray-200">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{details}</p>
          </div>
        </div>
      </div>
  </Parallax>
       
    );
};

export default Cover;