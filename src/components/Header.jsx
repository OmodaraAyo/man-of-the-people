import React, { useState } from "react";
import assets from "../assets/assets";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import Menu from "./menu/Menu";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="fixed inset-x-0 mx-auto w-full max-w-screen-md flex flex-col gap-2 bg-white shadow-xl z-50">
      <div className="flex justify-around gap-28 py-2">
        <button className="logo-menuBar flex items-center mt-5" onClick={() => setShowDropDown(true)}>
          <p className="flex flex-col items-center cursor-pointer outline-none" ><HiOutlineBars3 size={32}/><span className="text-[0.62rem] text-gray-800 -mt-1.5">Menu</span></p>
        {/* <img src={assets.Clogo} alt={`complet-logo`} className="w-[12.99rem]" /> */}
        </button>
        {/* column 2 */}
        <div className="flex gap-6 text-[1.68rem] items-center mt-6">
          <button className="flex flex-col items-center cursor-pointer outline-none"><BsCart3 size={24}/><span className="text-[0.62rem] text-gray-800 ">Products</span></button>
          <button className="flex flex-col items-center cursor-pointer outline-none"><MdOutlineLogout size={24}/><span className="text-[0.62rem] text-gray-800">Log out</span></button>
        </div>
      </div>
      {/* bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] */}
      <div className="flex justify-around w-full py-4 px-10">
          <h1>Accounts</h1>
          <h1>Dashboard</h1>
      </div>
      {showDropDown && (
            <div className="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto z-50 transform transition-all duration-300 ease-in-out"><Menu setShowDropDown={setShowDropDown}/></div>
        )}
    </div>
  );
};

export default Header;
