import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {

  const router = createBrowserRouter([
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    }
  
  ])
 return (
  <>
  <Navbar/>
  <RouterProvider router={router}/>
  <Footer/>
</>

 );
}

export default App;
