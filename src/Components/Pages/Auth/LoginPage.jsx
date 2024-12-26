import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/LottieFiles/RegistrationLottie.json"; // Make sure you have this animation file
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useDocumentTitle from "../../../Hooks/useDocumentTitle";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate();
  useDocumentTitle("Log In | Rent A Car");

  const { userLogin, user } = useContext(AuthContext);

  const location = useLocation();

  const validateInputs = (email, password) => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    if (!validateInputs(email, password)) {
      return;
    }

    userLogin(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome Back to Car Deal!",
          timer: 1500,
          showConfirmButton: true,
          confirmButtonColor: "#1ace53",
        });

        // console.log(result.user);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Something went wrong. Please try again.",
          showConfirmButton: true,
        });

        // console.log("ERROR", error.message);
      });
  };

  return (
    <div className=" flex p-3 items-center justify-center mb-5 mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center m-10 w-48 lg:text-left lg:w-[520px] lg:my-20">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 border">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
            Login
          </h2>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            {/* Email Input */}
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
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 focus:outline-none border-none"
                  required
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            {/* Password Input */}
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
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <div className="text-right m-2">
              <Link to="/auth/forgetpassword">
                <p className="text-green-500 hover:underline">
                  Forget password?
                </p>
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <SocialLogin />

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-green-500 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
