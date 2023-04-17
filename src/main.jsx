import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import Orders from './components/Orders/Orders';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"register",
        element:<Register />
      }, 
      {
        path:'/orders',
        element:<PrivateRoutes> <Orders /> </PrivateRoutes>
      },
      {
        path:"/profile",
        element:<PrivateRoutes> <Profile /> </PrivateRoutes>
      }

    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
     
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
