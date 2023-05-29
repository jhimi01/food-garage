import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const SingleRecommands = ({ item }) => {
  const { name, image,  recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [ ,refetch ] = useCart();

  const handleItem = (item) => {
    if (user && user.email) {
      const orderItem =  { foodId: _id, name, price, recipe, image, email: user.email}
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
          refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          console.log(data);
        });
    } else {
      Swal.fire({
        title: "You have to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="card w-full bg-base-100 shadow-xl"
    >
      <figure className="px-5 pt-5">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="my-1">{recipe}</p>
        <p className="text-gray-600">price: ${price}</p>
        <div className="card-actions">
          <button
            onClick={() => handleItem(item)}
            style={{ borderRadius: 0, border: "1px solid black" }}
            className="btn hover:text-black font-bold hover:bg-white bg-black text-white"
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecommands;
