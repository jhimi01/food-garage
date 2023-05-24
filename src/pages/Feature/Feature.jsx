import Button from "../../component/Button";
import ShareTitle from "../../component/ShareTitle";

const Feature = () => {
    return (
        <div className=" my-20 bg-base-300 py-5"  
        style={{backgroundImage: `url("https://i.ibb.co/TkhLfXq/bg.jpg")`,  
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment:'fixed'
        }}
          >
        <ShareTitle subheading={"Check it out"} headig={"FROM OUR MENU"}></ShareTitle>
           <div className="flex items-center justify-center w-5/6 mx-auto gap-10 backdrop-blur-sm bg-black/30">
           <div className="md:w-1/2 w-full" data-aos="fade-right" data-aos-duration="2000">
           <img className="w-full" src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="feature" />
           </div>            
            <div className="md:w-1/2 w-full text-white" data-aos="fade-left" data-aos-duration="2000">
<h3 className="text-xl font-bold">March 20, 2023
WHERE CAN I GET SOME?</h3>
<p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
<Button>ReadMore</Button>
            </div>
           </div>
        </div>
    );
};

export default Feature;