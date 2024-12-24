import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/Layouts/MainLayOut";
import Home from "../Components/Pages/Home/Home";
import AuthLayout from "../Components/Layouts/AuthLayout";
import LoginPage from "../Components/Pages/Auth/LoginPage";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import ForgetPassword from "../Components/Pages/Auth/ForgetPassword";
import RegistrationPage from "../Components/Pages/Auth/RegistrationPage";
import AvailableCars from "../Components/Pages/Cars/Available Car/AvailableCars";
import AddCar from "../Components/Pages/Cars/AddCar/AddCar";
import MyCar from "../Components/Pages/Cars/My Car/MyCar";
import MyBookings from "../Components/Pages/Booking/MyBookings";
import Blogs from "../Components/Pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import UpdateCar from "../Components/Pages/Cars/UpdateCar/UpdateCar";
import CarDetails from "../Components/Pages/Cars/CarDetails/CarDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableCars",
        element: <AvailableCars></AvailableCars>,
      },
      {
        path: "/addCar",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCar",
        element: <PrivateRoute><MyCar></MyCar></PrivateRoute>,
      },
      {
        path: "/MyBookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/updateCar/:id",
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/cars/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/carDetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/cars/${params.id}`).then((res) =>
            res.json()
          ),
      },
     
      {
        path: "",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <LoginPage></LoginPage>,
          },
          {
            path: "/auth/register",
            element: <RegistrationPage></RegistrationPage>,
          },
          {
            path: "/auth/forgetpassword",
            element: <ForgetPassword></ForgetPassword>,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
