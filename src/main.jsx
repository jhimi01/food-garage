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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Mycart from './pages/Dashboard/MyCart/Mycart';
import Dashboard from './Layout/Dashboard';
import PrivateRoute from './route/PrivateRoute';
import Alluser from './Layout/AllUsers/Alluser';
import AddItem from './pages/Dashboard/AddItem/AddItem';
import AdminRoute from './route/AdminRoute';
import ManageItem from './pages/Dashboard/ManageItems/ManageItem';
import Payment from './pages/Dashboard/Payment/Payment';
import UserHome from './pages/Dashboard/UserHome/UserHome';
import Adminhome from './pages/Dashboard/AdminHome/Adminhome';
const queryClient = new QueryClient()


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
  {
    path:'/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'adminhome',
        element: <AdminRoute><Adminhome></Adminhome></AdminRoute>
      },
     {
      path: 'mycart',
      element: <Mycart></Mycart>
     },
     {
      path: 'allusers',
      element: <Alluser></Alluser>
     },{
      path: 'additems',
      element: <AdminRoute><AddItem></AddItem></AdminRoute>
     },{
      path: 'manageitems',
      element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
     },{
      path: '/dashboard/payment',
      element: <Payment></Payment>
     }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <HelmetProvider>
 <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
  </HelmetProvider>
 </AuthProvider>
  </React.StrictMode>,
)
