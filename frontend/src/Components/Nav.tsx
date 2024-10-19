import React, { useState } from "react";
// import ham from "../image/hamburger.svg";
// import logo from "../image/logo.svg";
// import profile from "../image/profile.svg";
// import bag from "../image/shopping.svg";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden md:flex h-[96px] w-full items-center justify-between xl:px-[100px] md:px-[50px] px-[24px] border-b border-black sticky">
        {/* Left section */}
        <div className="flex gap-[10px] items-center">
          <img src="/image/logo.svg"></img>
          <p className="text-black font-poppins text-[32px] font-bold">
            Crochet Cuteness
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex xl:gap-[80px] md:gap-[25px]">
          <a href="/" className="relative text-black font-Inter ">
            Home
          </a>
          <a href="" className="relative text-black font-Inter ">
            Products
          </a>
          <a href="" className="relative text-black font-Inter ">
            Creators
          </a>
          <a href="" className="relative text-black font-Inter ">
            Orders
          </a>
          <a href="" className="relative text-black font-Inter ">
            Donation
          </a>
        </div>

        {/* Right section */}
        <div className="flex xl:gap-[30px] md:gap-[20px]">
          <a href="#signin" className="">
            <img src="/image/profile.svg" />
          </a>
          <a href="#cart" className="">
            <img src="/image/shopping.svg" />
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex justify-between items-center px-[16px] py-[12px] ">
        {/* Crochet Cuteness text */}
        <p className="text-black font-Sora text-[24px] font-bold whitespace-nowrap ">
          Crochet Cuteness
        </p>

        {/* Hamburger icon */}
        <button onClick={toggleMobileMenu} className="">
          <img src="/image/hamburger.svg" alt="menu" className="w-[32px] h-[32px] " />
        </button>
      </div>

      {/* Dropdown menu */}
      {showMobileMenu && (
        <div className="md:hidden flex flex-col absolute right-0 top-[96px] bg-white w-[60%] p-[16px] z-30 shadow-md animate-slide-in">
          <a href="/" className="relative text-black font-Inter ">
            Home
          </a>
          <a href="" className="relative text-black font-Inter ">
            Products
          </a>
          <a href="" className="relative text-black font-Inter ">
            Creators
          </a>
          <a href="" className="relative text-black font-Inter ">
            Orders
          </a>
          <a href="" className="relative text-black font-Inter ">
            Donation
          </a>
          <a href="" className="relative text-black font-Inter ">
            Sign in
          </a>
          <a href="" className="relative text-black font-Inter ">
            Cart
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
