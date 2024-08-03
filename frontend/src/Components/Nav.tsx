import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden xl:flex md:flex  h-[96px] w-full items-center justify-evenly xl:px-[300px] md:px-[100px] p-[24px]  border-bottom-gradient">
        {/* Left section */}
        <div className="flex gap-[10px]">
          <p className="text-black font-Sora text-[32px] font-bold">Crochet Cuteness</p>
        </div>

        {/* Navigation links */}
        <div className="flex xl:gap-[50px] md:gap-[25px]">
          <a
            href="/"
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Home
          </a>
          <a
            href=""
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Products
          </a>
          <a
            href=""
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Creators
          </a>
          <a
            href=""
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Orders
          </a>
          
          
        </div>

        {/* Right section */}
        <div className="flex  gap-[20px]">
          <a
            href="#signin"
            className="text-black font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[128px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="text-black font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[128px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center"
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex flex-row justify-between items-center px-[16px] py-[12px]">
        {/* Lantern text */}
        <p className="text-black font-Sora text-[24px] font-bold">Lantern</p>

        {/* Hamburger icon */}
        <button onClick={toggleMobileMenu} className="ml-auto">
          <img
            src="/image/hamburger.svg"
            alt="menu"
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Dropdown menu */}
      {showMobileMenu && (
        <div className="md:hidden flex flex-col absolute right-0 w-[40%] bg-[#08050F] p-[16px] z-30">
         <a
            href="/"
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Home
          </a>
          <a
            href="/store"
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Store
          </a>
          <a
            href="/editor"
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Editor
          </a>
          <a
            href="/menu"
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Menu
          </a>
          <a
            href="#"
            className="relative text-black font-Inter text-[18px] hover:text-black border-hidden hover-gradient-border"
          >
            Story Line
          </a>
          
          <a
            href="#signin"
            className="text-blackfont-Inter text-[18px] hover:text-black border:hidden hover:border-b border-b-[#F9C80E] mb-[8px]"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="text-blackfont-Inter text-[18px] hover:text-black border:hidden hover:border-b border-b-[#F9C80E]"
          >
            Register
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
