import { useEffect, useState } from "react";
import ShareTitle from "../../../component/ShareTitle";

const Recomands = () => {
    const [salad, setSalad] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then( data => {
           const salad = data.filter(item => item.category === 'salad')
           setSalad(salad)
        })
    },[])

    return (
        <div className="my-14">
        <div><ShareTitle subheading={"Should Try"} headig={"CHEF RECOMMENDS"}></ShareTitle></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            {
                salad.map(item => 
                <div key={item._id} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={item.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.name}</h2>
    <p className="my-2">{item.recipe}</p>
    <div className="card-actions">
      <button style={{borderRadius:0, border:'1px solid black'}} className="btn  hover:text-black font-bold hover:bg-white bg-black text-white">Buy Now</button>
    </div>
  </div>
</div>)
            }
        </div>
        </div>
    );
};

export default Recomands;