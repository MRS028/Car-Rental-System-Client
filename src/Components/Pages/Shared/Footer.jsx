import React from "react";
import logo from "../../../assets/cardeal.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 text-center lg:text-left">
        {/* Company Info */}
        <aside className="mb-6 lg:mb-0">
          <div className="flex justify-center lg:justify-start items-center mb-4">
           <img src="" alt="" />
            <div className="btn btn-ghost hover:bg-transparent text-base-100 text-2xl">
                     <div>
                     <img src={logo} className="w-16 h-12" alt="" />
                     </div>
                     <div>
                     <p class="relative text-3xl font-bold">
                       Car Dea
                       <span class="relative inline-block">
                         l
                         <span class="absolute top-[0.25rem] -mx-1 right-[-1rem] text-xs text-red-500">
                           BD
                         </span>
                       </span>
                     </p>
                     </div>
           
                   </div>
          </div>
          <p className="text-gray-400">
            Providing reliable tech solutions since 1992. Your partner in innovation and excellence.
          </p>
        </aside>

        {/* Services */}
        <nav className="flex flex-col items-center">
          <h6 className="text-xl font-semibold mb-4">Services</h6>
          <div className="lg:pl-8 ">
          <ul className="">
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition">
                Branding
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition">
                Design
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Advertisement
              </a>
            </li>
          </ul>
          </div>
        </nav>

        {/* Company */}
        <nav className="flex flex-col items-center">
          <h6 className="text-xl font-semibold mb-4">Company</h6>
          <ul className="lg:pr-5">
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition">
                About us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Press kit
              </a>
            </li>
          </ul>
        </nav>

        {/* Follow Us */}
        <div className="flex flex-col items-center">
          <h6 className="text-xl font-semibold mb-4">Follow Us</h6>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Car DealBD. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
