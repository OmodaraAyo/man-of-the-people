import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { RiUser3Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import assets from "../../assets/assets";
import Agreement from "./Agreement";
import { motion } from "framer-motion";

const Menu = ({setShowDropDown}) => {
    const text = ["Are Not FDIC Insured", "Are Not Bank Guaranteed", "May Lose Value", "Are Not Deposits", "Are Not Insured by Any Federal Government Agency", "Are Not a Condition to Any Banking Service or Activities"]
    const buttonListOne = ["Browse with Specialist", "Security", "Privacy", "Children's Privacy"]
    const buttonListTwo = ["Your Privacy Choices", "Advertising Practices", "Legal Info & Disclosures", "Equal Housing Lender"]

    
    return (
    <motion.nav
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className="flex flex-col gap-2 container mx-auto max-w-[50rem] justify-center bg-white overflow-x-hidden">
      <button className="flex items-center justify- w-full relative p-4">
        {/* Arrow at the beginning */}
        <MdKeyboardArrowLeft size={40} className="flex-shrink-0 cursor-pointer" onClick={() => setShowDropDown(false)} />

        {/* Centered "Menu" text */}
        <h1 className="text-[1.4rem] absolute left-1/2 transform -translate-x-1/2 -mt-1">
          Menu
        </h1>
      </button>
      <div className="w-full bg-gray-100 flex items-center p-1.5 rounded container mx-auto border-none gap-2 max-w-[20rem] sm:max-w-[32rem] z-30">
        <IoSearch className="mt-1 text-gray-400" />
        <input
          type="text"
          placeholder="Hi, I'm Erica. How can I help?"
          className="w-full outline-none placeholder:text-gray-500"
        />
      </div>
      <div className="w-full h-full bg-gray-100 py-5 px-7 flex flex-col gap-6">
        {/* profile */}
        <div className="bg-white rounded-2xl px-5 py-3 drop-shadow-lg">
            <label htmlFor="Profile" className="flex items-center gap-2 font-bold"><RiUser3Line size={24}/>Profile</label>
            <div className="flex flex-col gap-2 mt-3">
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Settings <MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between">Security Center <MdKeyboardArrowRight size={24} color="gray"/></p>
            </div>
        </div>

        {/* statment */}
        <div className="bg-white rounded-2xl px-5 py-3 drop-shadow-lg">
            <label htmlFor="Profile" className="flex items-center gap-2 font-bold"><GrDocumentText size={20}/> Statementa and Documents</label>
            <div className="flex flex-col gap-2 mt-3">
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Statement and Document <MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between">Go Paperless  <MdKeyboardArrowRight size={24} color="gray"/></p>
            </div>
        </div>

        {/* debit-card */}
        <div className="w-full h-full  rounded-2xl pt-2 drop-shadow-lg"style={{background: "linear-gradient(135deg, #8B0000 55%, #00008B 45%)"}}>
            <div className="flex flex-col gap-3 bg-white w-full h-full shadow-lg rounded-b-2xl py-3 px-4">
                {/* logo & text*/}
                <div className="flex flex-col font-semibold text-[0.999rem] border-b border-gray-200 pb-2">
                    <div className="flex justify-between gap-2">
                        <p className="-mt-1">Bank of America</p>
                        <img src={assets.logo} alt="complete-logo" className="w-[1.5rem]"/>
                    </div>
                </div>
                
                {/* card */}
                <div className="flex flex-col gap-2">
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Manage Debit/Credit Card <MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between py-2 border-b border-gray-200">My Rewards <MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between py-2 border-b border-gray-200">View my FICO&reg; Score<MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Center for Business Empowerment<MdKeyboardArrowRight size={24} color="gray"/></p>
            </div>
            </div>
        </div>

         {/* statment */}
         <div className="bg-white rounded-2xl px-5 py-3 drop-shadow-lg">
            <label htmlFor="Profile" className="flex items-center gap-2 font-bold"><IoHelpCircleOutline size={27}/> Help and Support</label>
            <div className="flex flex-col gap-2 mt-3">
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Help <MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Contact Us <MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Dispute a Transaction <MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Share Your Feedback <MdKeyboardArrowRight size={24} color="gray"/></p>
                <p className="flex items-center justify-between py-2 border-b border-gray-200">Browse with Specialist <MdKeyboardArrowRight size={24} color="gray"/></p>
            </div>
        </div>
      </div>
      <p className="flex items-center justify-between py-2 border-b border-gray-200"></p>
      {/* text */}
      <div>
        {/* row 1 */}
        <div className="w-full h-full py-5 px-7 flex flex-col gap-2 border-b border-gray-200">
          <p className="text-[0.682rem] sm:text-[0.912rem] mb-3">Investment, insurance and annuity products:</p>
          {text.map((item, index) => (
            <li key={index} className="text-[0.682rem] sm:text-[0.912rem] font-semibold">
              {item}
            </li>
          ))}
        </div>
        {/* row 2 */}
        <Agreement/>

        {/* row 3 */}
        <div>
            {/* list-One */}
            <div className="grid grid-cols-2 w-full h-full py-5 px-20 sm:px-17 gap-3 text-[0.622rem] sm:text-[0.912rem]">
              {buttonListOne.map((item, index) => (
                <button key={index} className="text-blue-800 cursor-pointer">{item}</button>
              ))}
            </div>
            {/* list-two */}
            <div className="grid grid-cols-2 w-full h-full py-1.5 px-14 sm:px-17 gap-3 text-[0.622rem] sm:text-[0.912rem] -mt-2.5">
              {buttonListTwo.map((item, index) => (
                <button key={index} className="text-blue-800 cursor-pointer">{item}</button>
              ))}
            </div>
        </div>
        <h1 className="w-full text-[0.622rem] sm:text-[0.912rem] text-center py-5 px-7 text-gray-800">Bank of America, N.A. Member FDIC. &copy; 2025 Bank of America Corporation</h1>
      </div>
    </motion.nav>
  );
};

export default Menu;
