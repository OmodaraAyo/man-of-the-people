import React from "react";
import assets from "../assets/assets";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  return (
    <div className="fixed w-full flex flex-col gap-2 bg-white shadow-xl z-50">
      <div className="flex justify-around py-2">
      <div className="logo-menuBar flex items-center text-[1.8rem] mt-4">
        <button className="flex flex-col items-center cursor-pointer" ><HiOutlineBars3/><span className="text-[0.8rem] text-gray-800 -mt-1.5">Menu</span></button>
        {/* <img src={assets.Clogo} alt={`complet-logo`} className="w-[12.99rem]" /> */}
      </div>
      {/* column 2 */}
      <div className="flex gap-6 text-[1.68rem] items-center mt-4">
        <button className="flex flex-col items-center cursor-pointer"><BsCart3 /><span className="text-[0.66rem] text-gray-800 ">Products</span></button>
        <button className="flex flex-col items-center cursor-pointer"><MdOutlineLogout /><span className="text-[0.66rem] text-gray-800">Log out</span></button>
      </div>
      </div>
      {/* bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] */}
      <div className="flex justify-around w-full py-4">
          <h1>Accounts</h1>
          <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Header;
