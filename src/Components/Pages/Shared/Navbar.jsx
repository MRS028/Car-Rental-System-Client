import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="6">My Cars</NavLink>
      </li>
      <li>
        <NavLink to="6">Car Details</NavLink>
      </li>
      <li>
        <NavLink to="6">Submenu</NavLink>
      </li>
      <li>
        <NavLink to="6">Item</NavLink>
      </li>
    </>
  );

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
            title: "Successfullu Loggef Out!",
            text: "Welcome Back to CarHub!",
            timer: 1000,
            showConfirmButton: false,
          });
        });
        navigate("/");
      }
    });
  };

  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
        <a className="btn btn-ghost text-xl">CarHubBD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user && user?.email ? (
          <>
            <div
              className="tooltip tooltip-bottom pr-3 text-base-content font-semibold"
              data-tip={user?.displayName || "Anonymous User"}
            >
              <img
                className="inline-block w-11 h-11 rounded-full cursor-pointer"
                src={user?.photoURL || "https://via.placeholder.com/40"}
                alt="User Avatar"
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-red-500 hover:bg-red-600 text-white"
            >
              LogOut <LuLogOut />
            </button>
          </>
        ) : (
          <>
            <Link
              to="/auth/register"
              className="btn hidden lg:flex bg-green-500 text-white hover:bg-green-600 font-bold"
            >
              Register
            </Link>
            <Link
              to="/auth/login"
              className="btn bg-green-500 text-white hover:bg-green-600 font-bold"
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
