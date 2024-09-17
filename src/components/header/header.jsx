import { images } from "@/constants";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
import Navbar from '@/components/Navbar/Navbar';

const Header = () => {
  // const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-full bg-transparent px-6 py-2 h-[60px] flex justify-between z-50">
      <img
        src={images.logo}
        alt="Celesta"
        className="h-[40px] w-auto cursor-pointer"
      />

      {/* Mobile Navbar */}
      <div className="flex md:hidden">
        <Navbar />
      </div>

      <div className="hidden md:flex justify-evenly min-w-[50%] items-center font-medium gap-5">
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        {/* <DropdownMenu /> */}
        <Link to="/sponsors" className="cursor-pointer">
          Sponsors
        </Link>
        <Link to="/contact" className="cursor-pointer">
          Contact Us
        </Link>
        {/* <Link to="/events" className="cursor-pointer">
          Events
        </Link> */}

        <Navbar />

        {/* <div className="flex gap-5">
          <button
            onClick={() => {
              alert("Too Early for the Fest. The Fest will be live soon");
            }}
            className="cursor-pointer px-8 py-[5px] border-white border-solid border-[1px] rounded-md"
          >
            Login
          </button>
          <button
            onClick={() => {
              alert("Too Early for the Fest. The Fest will be live soon");
            }}
            className="bg-white text-black cursor-pointer px-8 py-[5px] border-white border-solid border-[1px] rounded-md "
          >
            Register
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
