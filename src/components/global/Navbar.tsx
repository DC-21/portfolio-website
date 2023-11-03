import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOPen] = useState(false);

  return (
    <div className="w-full border-b border-gray-900 fixed top-0 z-50">
      <div className="bg-black relative backdrop-blur-md bg-opacity-70 w-full flex justify-between items-center py-3 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="text-[30px] font-bold">
          Chola
        </Link>

        {/* Links Desktop */}
        <li className="gap-4 md:flex hidden list-none items-center">
          <a href="#" className="text-lg">
            Home
          </a>
          <a href="#" className="text-lg">
            Services
          </a>
          <a href="#" className="text-lg">
            Projects
          </a>
        </li>

        {/* buttons Desktop */}
        <li className="gap-4 md:flex hidden list-none items-center">
          <Link
            to="/login"
            className="text-lg px-2 py-2 bg-white text-black active:scale-95 rounded hover:bg-opacity-70 transition-all"
          >
            Hire Me
          </Link>
        </li>

        {/* Menu button */}
        <button
          onClick={() => setOPen(!open)}
          className="md:hidden flex flex-col z-50 gap-1"
        >
          <div
            className={`h-1 w-8 bg-white ${
              open ? "rotate-45 translate-y-2" : "rotate-0"
            } transition-all duration-500 delay-300 rounded-full`}
          ></div>
          <div
            className={`h-1 w-8 bg-white ${
              open ? "translate-x-[200%]" : "translate-x-0"
            } transition-all duration-300 delay-200 rounded-full`}
          ></div>
          <div
            className={`h-1 w-8 bg-white ${
              open ? "-rotate-45 -translate-y-2" : ""
            } transition-all duration-500 delay-300 rounded-full`}
          ></div>
        </button>

        {/* Mobile Menu */}
        <motion.div
          animate={
            open
              ? { clipPath: "inset(0 0 0 0)" }
              : { clipPath: "inset(0 0 100% 0)" }
          }
          transition={{ duration: 0.2, delay: 0.5 }}
          className="absolute bg-black bg-opacity-70 backdrop-blur-lg z-50 py-8 border-y border-gray-900 lg:hidden inset-x-0 items-center justify-center top-[100%] flex w-full"
        >
          <div className="flex w-full h-auto">
            <li className="gap-4 flex flex-col w-full list-none items-center">
              <a href="#" className="text-lg">
                Transact
              </a>
              <a href="#" className="text-lg">
                Fraud
              </a>
              <a href="#" className="text-lg">
                Sign Up
              </a>
              <a
                href="#"
                className="text-lg px-4 py-2 bg-white rounded text-black hover:bg-[#b6b6b6] cursor-pointer"
              >
                Login
              </a>
            </li>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
