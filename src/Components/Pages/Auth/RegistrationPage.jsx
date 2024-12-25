import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLink,
} from "react-icons/ai";
import registrationAnimation from "../../../assets/LottieFiles/registerLottie.json"; // Ensure you have this animation file
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const { createNewUser, updateUserProfile, logOut } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, name, photoUrl } = Object.fromEntries(
      formData.entries()
    );

    // Validation logic
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = "Name is required.";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear previous errors if all inputs are valid

    // Existing logic
    createNewUser(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            logOut();
          })
          .then(() => {
            navigate("/auth/login");
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "You have registered successfully.",
              timer: 2000,
              showConfirmButton: true,
              confirmButtonColor: "#1ace53",
            });
          });
        console.log(result.user);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed!",
          text: "Something went wrong. Please try again.",
          showConfirmButton: true,
        });
        // console.log("ERROR", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center m-10 w-48 lg:text-left lg:w-[520px] lg:my-20">
          <Lottie animationData={registrationAnimation} loop={true} />
        </div>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 border">
          <h2 className="text-2xl font-bold text-center text-green-500 mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4 relative">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-green-500">
                <AiOutlineUser className="text-gray-500 ml-3" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 focus:outline-none border-none"
                  required
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4 relative">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-green-500">
                <AiOutlineMail className="text-gray-500 ml-3" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 focus:outline-none border-none"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Photo URL */}
            <div className="mb-6 relative">
              <label
                htmlFor="photoUrl"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo URL
              </label>
              <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-green-500">
                <AiOutlineLink className="text-gray-500 ml-3" />
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Enter your photo URL"
                  className="w-full px-3 py-2 focus:outline-none border-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-green-500">
                <RiLockPasswordLine className="text-gray-500 ml-3" />
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 focus:outline-none border-none"
                  required
                />
                <button
                  type="button"
                  className="mr-3 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Register Btn */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-green-500 hover:underline">
              Login here
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
