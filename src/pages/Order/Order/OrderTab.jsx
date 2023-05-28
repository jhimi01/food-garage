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
        <div className="grid grid-cols-1 md:grid-cols-3 py-3 bg-base-100 gap-5">
      {food.map(item => <SingleRecommands item={item} key={item._id}></SingleRecommands>)}

    </div>
        </SwiperSlide>
      </Swiper>
</div>
    );
};

export default OrderTab;











// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import SingleRecommands from "../../Homepage/Recommands/SingleRecommands";

// SwiperCore.use([Pagination]);

// const OrderTab = ({ food }) => {
//   const itemsPerPage = 6;

//   // Calculate the number of slider pages
//   const totalPages = Math.ceil(food.length / itemsPerPage);

//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   return (
//     <div>
//       <Swiper pagination={pagination} className="mySwiper">
//         {[...Array(totalPages)].map((_, page) => (
//           <SwiperSlide key={page}>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//               {food
//                 .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
//                 .map((item) => (
//                   <SingleRecommands
//                     item={item}
//                     key={item._id}
//                   ></SingleRecommands>
//                 ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default OrderTab;
