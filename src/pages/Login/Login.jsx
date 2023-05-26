import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
  const [disabled, setDisabled] = useState(true)

  const cpachaRef = useRef(null)

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])


    const handleLogin=(e)=>{
e.preventDefault();
const form = e.target;
const name = form.name.value;
const email = form.email.value;
console.log(name, email)
    }

    const handleValidatCapcha =()=>{
      const value = cpachaRef.current.value;
      console.log(value)
      if (validateCaptcha(value)==true) {
       
        setDisabled(false)
    }

    else {
       
        setDisabled(true)
    }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input ref={cpachaRef} type="text" placeholder="type the capcha" name="password" className="input input-bordered" />
                <button onClick={handleValidatCapcha} className='btn btn-outline btn-xs mt-2'>validatie</button>
              </div>
              <div className="form-control mt-6">
               
                <input type="submit"  disabled={disabled}  className="btn btn-primary" value='Login'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;