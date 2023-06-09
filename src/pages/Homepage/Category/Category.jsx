import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './Category.css'

import "swiper/css";
import "swiper/css/pagination";
import ShareTitle from "../../../component/ShareTitle";

const Category = () => {
    return (
        <div className="py-4 my-5 h-full">
        <ShareTitle  subheading={"From 11:00am to 10:00pm"}
        headig={"ORDER ONLINE"}>
        </ShareTitle>
        <div className="swiper-container h-60">
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-40"
      >
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/5253032/pexels-photo-5253032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="food menu" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food menu" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food menu" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food menu" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food menu" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food menu" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/1832016/pexels-photo-1832016.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food menu" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food menu" />
           
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=600" />
           
        </SwiperSlide>
      </Swiper>   
      </div>           
        </div>
    );
};

export default Category;