import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Mycart = () => {

    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((accumulator, item) => accumulator + item.price, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    };


    return (
        <div className="w-full h-full">
         <Helmet>
        <title>Food Garage | Mycart</title>
      </Helmet>
          <div className="flex items-center justify-center gap-10 py-5">
          <h2 className="text-3xl text-semibold">Total Item: {cart.length}</h2>
           
           <h2 className="text-3xl text-semibold">Total Price: ${totalPrice}</h2>
           <Link to='/dashboard/payment'><button className="btn btn-sm">PAY</button></Link>
           
          </div>
          <div className="overflow-x-auto w-full">
  <table className="table w-full ">
    {/* head */}
    <thead >
      <tr>
        <th>
         #
        </th>
        <th>FOOD</th>
        <th>ITEM NAME</th>
        <th>Price</th>
        <th>ACTION</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {cart.map((item, index) =>  <tr key={item._id}>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {item.name}
        </td>
        <td>${item.price}</td>
        <th>
          <button onClick={()=>handleDelete(item._id)} className="btn bg-black text-white"><BsTrashFill /></button>
        </th>
      </tr>)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Mycart;