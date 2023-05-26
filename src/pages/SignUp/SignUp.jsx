import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {createUser}= useContext(AuthContext)
  const onSubmit = data => {
    createUser(data.email, data.password)
    .then(result=> 
      {
        console.log(result.user)
        data.email='';

        data.password='';
      }
    
    )
    .catch(error => console.log(error))
    console.log(data)
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
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;
