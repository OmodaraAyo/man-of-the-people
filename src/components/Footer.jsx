"use client";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { name: "Accounts", icon: <CiDollar size={28} />, path: "/" },
    { name: "Pay & Transfer", icon: <CiDollar size={28} />, path: "/statistics"},
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto bg-white border-t border-gray-200 flex justify-around items-center py-2 px-6">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={() => setActiveTab(item.name.toLowerCase())}
          className={`flex flex-col items-center ${
            activeTab === item.name.toLowerCase() ? "text-blue-500" : "text-[#413e3e]"
          }`}
        >
        {item.icon}
          <span className="text-xs mt-1">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Footer;
