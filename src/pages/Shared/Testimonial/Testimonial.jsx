import ShareTitle from "../../../component/ShareTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data));
    },[])
    return (
        <div className="my-20">
            <ShareTitle subheading={"What Our Clients Say"}
            headig={"TESTIMONIALS"}
            ></ShareTitle>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {review.map(data => 
            <SwiperSlide key={data._id}>
                <div className="p-10 flex flex-col items-center">
                <Rating style={{ maxWidth: 200 }} value={data.rating}/>
                    <p className="font-bold text-5xl">,,,</p>
                    <p className="text-base my-5">{data.details}</p>
                    <h3 className="text-xl font-bold text-yellow-600">{data.name}</h3>
                </div>
            </SwiperSlide>)}
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;