import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact"
import About from "./components/About";
import DashBoard from "./components/DashBoard"
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";
import LiveDemo from "./components/LiveDemo";
import ProductId from "./components/ProductId";
import MatchPage from "./pages/MatchPage";
import LoginPage from "./components/LoginPage";
import Product from "./components/Product";
import BookingPage from "./pages/BookingPage";
import SuccessPage from "./pages/SuccessPage";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <MatchPage/>
        </div>
      },
      {
        path:'/contact',
        element:
        <div>
          <Contact/>
        </div>
      },
      {
        path:'/about',
        element:
        <div>
          <About/>
        </div>
      },
      {
        path:'/dashboard',
        element:
        <div>
          <DashBoard/>
        </div>
      },
      {
        path:'/products',
        element:
        <div>
          <Products/>
        </div>,
        children:[
          {
            path:'product',
            element:<Product/>
          }
        ]
      },
      {
        path:'/get-started',
        element:
        <div>
          <GetStarted/>
        </div>
      },
      {
        path:'/live-demo',
        element:
        <div>
          <LiveDemo/>
        </div>
      },
      {
        path:'/product-id/:id',
        element:
        <div>
          <ProductId/>
        </div>
      },
      {
        path:'/bookings',
        element:<BookingPage/>
      },
      {
        path:'/success',
        element:<SuccessPage/>
      }
    ]
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
