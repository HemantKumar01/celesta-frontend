import { images } from "@/constants";
import { useNavigate } from "react-router";

import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropDown";






const Header = () => {
  const navigate = useNavigate();



  return (
    <div className="absolute top-0 left-0 w-full bg-transparent px-6 py-2 h-[60px] flex justify-between z-50">
      <img
        src={images.logo}
        alt="Celesta"
        className="h-[40px] w-auto cursor-pointer"
      />
      <div className="hidden md:flex justify-evenly min-w-[50%] items-center font-medium gap-0">
        <a href="/" className="cursor-pointer">
          Home
        </a>



        <DropdownMenu/>





        <a href="/events" className="cursor-pointer">
          Events
        </a>

        <div className="flex gap-5">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="cursor-pointer px-8 py-[5px] border-white border-solid border-[1px] rounded-md"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-black cursor-pointer px-8 py-[5px] border-white border-solid border-[1px] rounded-md "
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
