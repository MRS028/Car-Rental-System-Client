import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result?.user?.name);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "SigIn/SignUp Successful!",
          text: "Welcome to Car Deal!",
          icon: "success",
          showConfirmButton: true,
          timer: 1000,
          timerProgressBar: true,
          confirmButtonColor: "#d33",
        });
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password. Please try again.",
          confirmButtonText: "Retry",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div>
      <div className="divider m-4">OR</div>
      <div className=" flex justify-center">
        <button onClick={handleGoogleSignIn} className="btn w-full">
          <FcGoogle className="" /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
