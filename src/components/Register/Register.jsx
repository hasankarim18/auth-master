import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    
     const [showPassword, setShowPassword] = useState(false);
     const {user, createUser } = useContext(AuthContext)



     const handleShowPassword = () => {
       setShowPassword((prev) => !prev);
     };

     const registerHandler = (event)=> {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // console.log({name}, {email}, {password});
        createUser(email, password)
        .then((result)=> {
          const loggedInUser = result.user
          console.log(loggedInUser);
          form.reset()
        })
        .catch((error)=> {
          console.log(error);
        })

     }

    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={registerHandler} className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={!showPassword ? "password" : "text"}
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered w-full"
                  />

                  <span
                    onClick={handleShowPassword}
                    className="absolute top-1/3 right-1 cursor-pointer"
                  >
                    {!showPassword ? (
                      <i className="fa-regular fa-eye"></i>
                    ) : (
                      <i className="fa-regular fa-eye-slash"></i>
                    )}
                  </span>
                </div>
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;