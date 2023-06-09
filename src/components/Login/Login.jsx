    import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { toast } from 'react-hot-toast';
    
    const Login = () => {
        const [showPassword, setShowPassword] = useState(false)
        const navigate = useNavigate()

        const { singInUser, signInByGoogle } = useContext(AuthContext);

        const handleShowPassword = ()=> {
            setShowPassword(prev => !prev)
        }

        const signInToast = ()=> toast("Sign in successfull")
        const signInFailedToast = ()=> toast("Sign in failed")

        const loginHandler = (event)=> {
            event.preventDefault()
            const form = event.target 
            const email = form.email.value 
            const password = form.password.value 
            singInUser(email, password)
            .then((res)=> {
              const loggedInUser = res.user;
           //   console.log(loggedInUser);
               signInToast()
               navigate('/')

            })
            .catch((error)=> {
              signInFailedToast()
              console.log(error);
            })
        }
        

        const googleSingInHandler = () => {
            signInByGoogle()
            .then(res => {
               navigate("/");
              console.log(res.user)
            })
        };

        return (
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={loginHandler} className="card-body">
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
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <div className="text-center">
                  <button onClick={googleSingInHandler} className="btn">Google</button>
                </div>
                <Link to="/register" className="btn btn-link" > New to auth master?</Link>
              </div>
            </div>
          </div>
        );
    };
    
    export default Login;