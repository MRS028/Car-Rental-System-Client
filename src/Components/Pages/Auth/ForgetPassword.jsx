import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
 

  const handleEmailChange = (e) => setEmail(e.target.value);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset for:", email);
    // Here, you would typically send a reset password email or an API request.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">Forget Password</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-green-500">
              <AiOutlineMail className="text-gray-500 ml-3" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-3 py-2 focus:outline-none border-none"
                required
              />
            </div>
          </div>

          {/* New Password Input */}
         

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Reset Password
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-4">
          Remember your password?{" "}
          <Link to="/auth/login" className="text-green-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
