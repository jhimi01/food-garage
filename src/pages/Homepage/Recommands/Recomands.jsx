import { useEffect, useState } from "react";
import ShareTitle from "../../../component/ShareTitle";
import SingleRecommands from "./SingleRecommands";

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
                salad.map(item => <SingleRecommands key={item._id} item={item}></SingleRecommands>)
            }
        </div>
        </div>
    );
};

export default Recomands;