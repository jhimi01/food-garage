import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { register, handleSubmit, reset,  formState: { errors } } = useForm();
  const {createUser, updateUserProfile}= useContext(AuthContext)
  const navigate = useNavigate();
  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const loggeduser = result.user;
        console.log(loggeduser)
        updateUserProfile({ email: data.email, photo: data.photo })

        .then(()=>{
          const saveUser= { name: data.name, email: data.email}
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              reset()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/')
            }
          })
         
        })
      })
      .catch(error => console.log(error));
  };
  
  return (
   <>
   <Helmet>
    <title>Food Garage | SignUp</title>
   </Helmet>
     <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered" />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="form-control">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <input {...register("photo", { required: true })} type="url" placeholder="photo URL" className="input input-bordered" />
  {errors.photo && <span className="text-red-500 text-sm">This field is required</span>}
</div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", { 
                required: true,
                minLength: 7,
                maxLength: 20,
                 })} placeholder="password" className="input input-bordered" />
              {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Password must be at least 7 characters</span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-500 text-sm">Password must be less than 20 characters</span>}
              {errors.password?.type === 'required' && <span className="text-red-500 text-sm">This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value='signup' />
              
            </div>
            <Link to='/login'><p className='text-xs'>Already have an account?Login.</p></Link>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;
