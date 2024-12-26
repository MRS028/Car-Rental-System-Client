import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../../assets/cardeal.png";
import { motion } from "framer-motion";
import { LuLogOut } from "react-icons/lu";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(user);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      customClass: {
        confirmButton: "bg-red-600 text-white hover:bg-red-700",
        cancelButton: "bg-gray-400 text-white hover:bg-gray-500",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            icon: "success",
            title: "Successfully Loggef Out!",
            text: "See you again,Have a good day!",
            timer: 1000,
            showConfirmButton: true,
            confirmButtonColor: "#d33",
          });
        });
        navigate("/");
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableCars">Available Cars</NavLink>
      </li>

      {user && user?.email ? (
        <>
          {" "}
          <li>
            <NavLink to="/addCar">Add Car</NavLink>
          </li>
          <li>
            <NavLink to="/myCar">My Car</NavLink>
          </li>
          <li>
            <NavLink to="/MyBookings">My Bookings</NavLink>
          </li>{" "}
        </>
      ) : (
        ""
      )}

      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {user ? (
        <>
          <div className="flex justify-center lg:hidden">
            <button
              onClick={handleLogout}
              className="badge p-4 hover:bg-red-700 bg-red-500 w-26  text-white"
            >
              LogOut <LuLogOut />{" "}
            </button>
          </div>
        </>
      ) : (
        ""
      )}
      {/* //<NavLink */}
      {/* //   onClick={handleLogout}
      //   className="btn lg:hidden bg-red-500 hover:bg-red-600 text-white"
      // >
      //   LogOut <LuLogOut />
      // </NavLink> : ''
     */}
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex btn-ghost hover:bg-transparent  text-base-100 text-2xl">
          <img src={logo} className="w-16 hidden lg:flex h-10" alt="" />
          <p class="relative text-xl lg:text-3xl font-bold">
            Rent A Ca
            <span class="relative inline-block">
              r
              <div className="tooltip tooltip-bottom  text-base-content font-semibold" data-tip='Rent A Car Home'>
              <span class="absolute top-[-2rem] -mx-1 right-[-1rem] text-xs text-red-500">
                BD
              </span>
              </div>
            </span>
          </p>

          {/* <motion.span
            animate={{ color: ["#FF8C00", "#7FFF00", "#0000FF"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
           Car  Hub
          </motion.span>{" "}
          <span className="tooltip-top">  BD</span> */}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user && user?.email ? (
          <>
            <div
              className="tooltip tooltip-left lg:tooltip-bottom text-base-content font-semibold"
              data-tip={user?.email || "Anonymous User"}
            >
              <img
                className="inline-block w-11  h-11 rounded-full cursor-pointer"
                src={user?.photoURL || "userPhoto"}
                alt="User Avatar"
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-red-500 hidden lg:flex hover:bg-red-600 border-none text-white"
            >
              LogOut <LuLogOut />
            </button>
          </>
        ) : (
          <>
            <Link
              to="/auth/register"
              className="btn hidden lg:flex bg-green-500 text-white border-none hover:bg-green-600 font-bold"
            >
              Register
            </Link>
            <Link
              to="/auth/login"
              className="btn bg-green-500 text-white hover:bg-green-600 border-none font-bold"
            >
              <CiLogin></CiLogin> Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
