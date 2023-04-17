import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProviders from './Providers/AuthProviders';

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
