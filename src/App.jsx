import React from "react";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact"
import About from "./components/About";
import DashBoard from "./components/DashBoard"
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";
import LiveDemo from "./components/LiveDemo";
import ProductId from "./components/ProductId";
import Product from "./components/Product";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path:'/contact',
        element:
        <div>
          <Navbar/>
          <Contact/>
        </div>
      },
      {
        path:'/about',
        element:
        <div>
          <Navbar/>
          <About/>
        </div>
      },
      {
        path:'/dashboard',
        element:
        <div>
          <Navbar/>
          <DashBoard/>
        </div>
      },
      {
        path:'/products',
        element:(
        <div>
          <Navbar/>
          <Outlet/>
        </div>),
        children:[
          {
            index:true,
            // path:'product/',
            element:<Products/>
          },
          {
            path: 'product', 
            element: <Product />
          }
        ]
      },
      {
        path:'/get-started',
        element:
        <div>
          <Navbar/>
          <GetStarted/>
        </div>
      },
      {
        path:'/live-demo',
        element:
        <div>
          <Navbar/>
          <LiveDemo/>
        </div>
      },
      {
        path:'/product-id/:id',
        element:
        <div>
          <Navbar/>
          <ProductId/>
        </div>
      },
    ]
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
