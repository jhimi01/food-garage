import SingleRecommands from "../../Homepage/Recommands/SingleRecommands";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const OrderTab = ({food}) => {

    
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
  

    return (
<div>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {food.map(item => <SingleRecommands item={item} key={item._id}></SingleRecommands>)}

    </div>
        </SwiperSlide>
      </Swiper>
</div>
    );
};

export default OrderTab;