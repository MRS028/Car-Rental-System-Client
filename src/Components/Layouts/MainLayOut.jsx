import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const MainLayOut = () => {
  return (
    <>
      <div className="mx-auto   bg-[#c5ae70] sticky z-50 top-0">
        <Navbar></Navbar>
      </div>
      <div>
    
        <div className="min-h-[500px]">
        <Outlet></Outlet>
        
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayOut;
