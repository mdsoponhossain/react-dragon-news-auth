import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
   const {logIn,loading} = useContext(AuthContext);
   const location = useLocation();
   console.log(location)
   
   if(loading){
    return ;
   }
    const navigate  = useNavigate(); 

   const handleLogin=e=>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
   const email = form.get('email');
   const password = form.get('password');
    logIn(email,password)
    .then((result)=>{
        console.log(result.user);
        e.target.reset();
         /* navigate('/news/${id}')  */
         navigate(location?.state ? location.state : '/')
       
    })
    .catch((error)=>{console.log(error.message)})
   }


    return (
        <div>
            <Navbar></Navbar>
            

            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin} >
                <div className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" required name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" required placeholder="Enter your password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                </div>
            </form>
            <p className="text-center"> Do not have an account? Please <Link className="text-blue-600 underline" to='/register'> Register</Link> </p> 

        </div>
    );
};

export default Login;






