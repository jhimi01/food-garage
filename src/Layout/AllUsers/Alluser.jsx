import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { BsTrashFill } from 'react-icons/bs';
import { FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';

const Alluser = () => {

    const {data: users = [], refetch} = useQuery(['users'], async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    const handleDelete =(user)=>{
      fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'DELETE',
      }).then(res => res.json())
      .then(data => {
        console.log(data)
        refetch()
        // if (data.modifiedCount > 0) {
        //   refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `deleted successfully`,
            showConfirmButton: false,
            timer: 1500
          })
        // }
      })
    }


    const handleMakeAdmin =(user)=>{
      fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH',
      }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is now admin`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }


    return (
        <div>
        <Helmet>
            <title>Food Garage | All users</title>
        </Helmet>
            <h3 className='text-3xl font-semibold'>Total user: {users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((item, index) => <tr key={item._id}>
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.role  == 'admin' ? 'admin' : <button onClick={()=>handleMakeAdmin(item)} className="btn bg-black text-white"><FaUserShield /></button>}
        </td>

        <td><button onClick={()=>handleDelete(item)} className="btn bg-black text-white"><BsTrashFill /></button></td>
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Alluser;