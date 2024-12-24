import React, { useEffect } from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const MainLayOut = () => {

  //mouse right button disable code
  // useEffect(() => {
  //   // Right-click নিষিদ্ধ
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };
  //   document.addEventListener('contextmenu', handleContextMenu);

  //   // Clean up: Remove event listener on component unmount
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);
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
