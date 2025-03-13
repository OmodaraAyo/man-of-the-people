import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import assert from "../assets/assets"
const Account = () => {
    const [showWarning, setShowWarning] = useState(true)
    const activeAccounts = [
        {name: "Banking", logo: assert.logo, text: "FDIC-Insured-Backed by the full faith and credit of the U.S Government", type: "Adv Plus Banking - 3324", balance: "$54.19"},
        {name: "Credit Cards", logo: assert.logo, type: "Doc", balance: "$15,844.79"}
    ]
  return (
    <div className="pt-42">
      <div className="w-full bg-gray-200 flex items-center p-1.5 rounded container mx-auto border-none gap-2 text-black max-w-[23rem] sm:max-w-[32rem] z-30">
                <IoSearch className="mt-1" color="gray"/>
                <input
                  type="text"
                  placeholder="Hi, I'm Erica. How can I help?"
                  className="w-full outline-none placeholder:text-gray-500"
                />
              </div>
              {showWarning && (
                  <div className="w-full h-full bg-[#ffefbc] flex justify-around py-5 px-9 container mx-auto sm:max-w-[32rem] mt-0.5 rounded">
                  <div className="flex gap-2 max-w-[17rem] text-[1.02rem] font-semibold">
                    <IoWarning size={50} color="#FF8C42"/>
                    <div>
                    <p>Did you overlook something? <span className="text-sm font-normal">we noticed your Doc is past due.</span></p>
                    <button className="text-[0.869rem] text-blue-700 cursor-pointer">View Payment Details</button>
                    </div>
                  </div>
                  <IoCloseSharp size={25} color="gray" onClick={() => setShowWarning(false)} className="cursor-pointer active:text-gray-600"/>
                </div>
              )}
              <div className="flex flex-col gap-4 w-full items-center bg-gray-200 mt-4 py-5 px-11 insert-x-0 mx-auto max-w-screen-md flex-grow">
              {activeAccounts.map((account, index) => (
                  <div key={index} className="w-full h-full max-w-[33rem] rounded pt-2"style={{background: "linear-gradient(135deg, #8B0000 55%, #00008B 45%)"}}>
                      <div className="flex flex-col gap-3 bg-white w-full h-full shadow-lg rounded-b">
                          <h1 className="flex justify-between px-4 py-2 font-bold text-[1.169rem] font-sans border-b border-gray-300">
                              <p>{account.name}</p>
                              <MdKeyboardArrowUp size={24}/>
                          </h1>
                          
                          {/* logo & text*/}
                          <div className="flex flex-col px-4 font-semibold text-[0.999rem]">
                              <div className="flex gap-2">
                                  <p className="-mt-1">Bank of America</p>
                                  <img src={account.logo} alt="complete-logo" className="w-[1.5rem]"/>
                              </div>
      
                              {/* text */}
                              {account.text && (
                              <p className="italic text-[0.573rem] font-semibold"><span className="text-blue-950 font-extrabold not-italic text-[0.955rem]">FDIC</span> {account.text}</p>
                              )}
                          </div>
      
                          {/* type & balance*/}
                          <div className="flex justify-between px-4 py-2 font-medium">
                              <h1 className="max-w-[9rem]">{account.type}</h1>
                              <h1 className="font-bold text-[1.22rem] flex items-center cursor-pointer"><p>{account.balance}</p> <MdKeyboardArrowRight size={24} /></h1>
                          </div>
                      </div>
                  </div>
              ))}
              </div>
    </div>
  )
}

export default Account
