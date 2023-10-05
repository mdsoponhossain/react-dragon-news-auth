import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const{createUser} = useContext(AuthContext);
    const handleRegister=e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email=form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photo');
        console.log(name,email,password,photoUrl)
        createUser(email,password)
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error))
        
       }
    
    
        return (
            <div>
                <Navbar></Navbar>
                
    
                <h1 className="text-5xl text-center font-bold">Register now!</h1>
                <form onSubmit={ handleRegister} >
                    <div className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" required name="name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your photo </span>
                        </label>
                        <input type="text" placeholder="Enter your photo url" required name="photo" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" required name="email" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="Enter your password" className="input input-bordered"  />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    </div>
                </form>
                <p className="text-center"> Do  have an account? Please <Link className="text-blue-600 underline" to='/login'> Login</Link> </p> 
    
            </div>
        );
};

export default Register;