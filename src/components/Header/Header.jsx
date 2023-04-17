import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
   const { user, userSignOut } = useContext(AuthContext);

   const signoutToast = () => toast("Successfully sign out.");


   const handleSignOut = ()=> {
      userSignOut()
      .then(result => {
       console.log(result);
        signoutToast();
      })
      .catch(error => {
      //  console.log(error);
      })
   }

    return (
      <div>
        <div className="navbar bg-primary text-primary-content">
          <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </NavLink>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </NavLink>
          {!user && (
            <>
              <NavLink
                className="btn btn-ghost normal-case text-xl"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="btn btn-ghost normal-case text-xl"
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}

          {user ? (
            <>
              {" "}
              <span className="inline-block">{user.email}</span>{" "}
              <button
                onClick={handleSignOut}
                className="btn btn-error btn-xs inline-block ml-4"
              >
                Sing out
              </button>{" "}
            </>
          ) : (
            <>
              {" "}
              <Link to="/login" className="btn btn-error ml-4 btn-xs">
                Login
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    );
};

export default Header;