import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './global.css';
import {RouterProvider , createBrowserRouter} from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import AddTransaction from './views/AddTransactions/AddTransactions';



const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/Signup',
    element:<Signup/>
  },
  {
    path:'/Add-Transaction',
    element: <AddTransaction />
  },
  {
    path: '*',
    element: <h1>Not Found</h1>
  }
])
root.render(< RouterProvider router={router}/>);