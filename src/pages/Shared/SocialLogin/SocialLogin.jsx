import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogle = () => {
    googleLogin()
      .then(result => {
        const loggedIn = result.user;
        console.log(loggedIn);
      
        const saveUser= { name: loggedIn.displayName, email: loggedIn.email}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(() => {
           
          navigate(from, {replace: true })
            
          })


      })
     
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="my-5 text-center">
      <div className="divider"></div>
      <button onClick={handleGoogle} className="btn btn-circle">
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
