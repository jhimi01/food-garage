import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './pages/Homepage/Home';
import { HelmetProvider } from 'react-helmet-async';
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order/Order';
import Login from './pages/Login/Login';
import AuthProvider from './provider/AuthProvider';
import SignUp from './pages/SignUp/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path: '/order/:cetagory',
        element: <Order></Order>
      },{
        path: '/login',
        element: <Login></Login>
      },{
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <HelmetProvider>
     <RouterProvider router={router} />
  </HelmetProvider>
 </AuthProvider>
  </React.StrictMode>,
)
