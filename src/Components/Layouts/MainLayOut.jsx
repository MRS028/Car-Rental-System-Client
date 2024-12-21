import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const MainLayOut = () => {
  return (
    <>
      <div className="mx-auto bg-base-200">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayOut;
