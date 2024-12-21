import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const handleGoogleSignIn = () => {};

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
