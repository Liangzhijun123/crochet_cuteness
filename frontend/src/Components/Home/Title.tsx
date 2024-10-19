import React from "react";
// import search from "../../image/search.svg";
// import mic from "../../image/mic.svg";
// import camera from "../../image/camera.svg";

const Title = () => {
  return (
    <>
      <div className=" flex justify-center items-center mt-20">
        <div className="border border-black w-[709px] h-[55px] rounded-[20px] flex justify-between items-center px-10">
          {/* Left section: Search input */}
          <div className="flex flex-row justify-center items-center gap-[12px]">
            <img
              src="/image/search.svg"
              alt="search icon"
              className="w-[24px] h-[24px]"
            />

            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none text-black placeholder:text-gray-400 focus:ring-0 w-[500px]"
            />
          </div>

          {/* Right section: Mic and Camera icons */}
          <div className="flex flex-row justify-center items-center gap-[24px]">
            <img
              src="/image/mic.svg"
              alt="mic icon"
              className="w-[24px] h-[24px]"
            />
            <img
              src="/image/camera.svg"
              alt="camera icon"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-around items-center ">
        <div className="flex flex-col justify-between w-[582px] gap-[24px]">
          <p className="font-poppins text-[56px] font-bold">
            Explore, create, and share adorable crochet plushies
          </p>
          <p className="font-poppins text-[20px]">
            Platform with over 1,000 cute crochet plushie patterns and a vibrant
            community of crafters
          </p>
          <div className=" flex flex-row gap-[24px] ">
            <a className="border rounded-[12px] border-black hover:border-none hover:bg-[#FF8BA7] hover:text-[#33272A] w-[190px] h-[52px] flex justify-center items-center">
              Start crafting
            </a>
            <a className="border rounded-[12px] border-black hover:border-none hover:bg-[#FF8BA7] hover:text-[#33272A] w-[190px] h-[52px] flex justify-center items-center">
              Buy plushies
            </a>
          </div>
          <div className=" flex flex-row gap-[32px] ">
            <div className="flex flex-col gap-[4px]">
              <p className="font-poppins text-[32px]">1k +</p>
              <p className="font-poppins text-[16px]">Patterns</p>
            </div>
            <div className="w-[1px] bg-[#D3D3D3]"></div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-poppins text-[32px]">1k +</p>
              <p className="font-poppins text-[16px]">Crafters</p>
            </div>
            <div className="w-[1px] bg-[#D3D3D3]"></div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-poppins text-[32px]">1k +</p>
              <p className="font-poppins text-[16px]">Orders processed</p>
            </div>
          </div>
        </div>
        <div className="w-[391px]">
          <img src="/image/hook.svg" className="relative"></img>
          <div className="absolute w-[391px] h-[151px] bg-[#FAEEE7] mt-[-10px] rounded-t-[10px]"></div>
        </div>
      </div>
    </>
  );
};

export default Title;
