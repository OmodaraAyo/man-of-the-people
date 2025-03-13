import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import assets from "../assets/assets";
import { MdLock } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { useAuth } from "./AuthContext";

const Login = () => {
  const staticUserId = "user123";
  const staticPassword = "password123";
 
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId === staticUserId && password === staticPassword) {
      setError("");
      login(); 
      navigate("/home/account");
    } else {
      setError("Incorrect user ID or password");
    }
  };

  return (
    <header className="min-h-screen flex flex-col container mx-auto inset-x-0 max-w-screen-md">
      {/* Row 1 */}
      <h1 className="text-[0.615rem] italic bg-gray-200 text-center p-2">
        Bank of American deposit products:{" "}
        <span className="text-blue-950 font-bold not-italic text-[0.855rem]">
          FDIC
        </span>{" "}
        FDIC-insured-Backed by the full faith and credit of the U.S. Government
      </h1>

      {/* Row 2 */}
      <div className="container mx-auto py-3 px-5 flex justify-between">
        <div className="Logo-container flex items-center gap-2 text-gray-500">
          <img src={assets.Clogo} alt={`complet-logo`} className="w-[11.7rem]" />
          {/* <p>Log In</p> */}
        </div>
        {/* Secure */}
        <div className="flex items-center text-gray-700 font-bold gap-1">
          <p className="flex items-center gap-1 px-2 border-r border-dotted">
            <MdLock />
            Secure Area
          </p>
          <p className="text-gray-500 font-normal hidden sm:block">En español</p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="bg-red-500 text-white py-3 px-6 sm:px-19 sm:text-[1.089rem] lg:text-[1.2rem]">
        Log In to Online Banking
      </div>

      {/* Row 4 */}
      <div className="container mx-auto px-15 py-8 flex-grow">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* User ID */}
          <label htmlFor="UserId">User ID</label>
          <input
            type="text"
            id="UserId"
            className="border rounded p-2 outline-none"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          {/* Save Password */}
          <label
            htmlFor="save-password"
            className="flex items-center gap-2 text-[0.856rem]"
          >
            <input
              type="checkbox"
              name="save-password"
              value="yes"
              className="cursor-pointer"
            />
            <p>Save this User Id</p>
            <div className="bg-blue-500 rounded-full w-4 h-4 items-center flex justify-center text-white cursor-pointer">
              {" "}
              ?
            </div>
          </label>

          {/* Password */}
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            className="border rounded p-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="text-white bg-blue-800 border border-blue-900 rounded py-1.5 px-4 max-w-28 flex items-center gap-2 justify-center transform transition-all duration-300 ease-in-out active:bg-blue-950 cursor-pointer"
          >
            <MdLock />
            <p className="font-medium">Log In</p>
          </button>
        </form>
      </div>

      {/* Row 5 (Footer) */} 
      <div className="w-full bg-[#fff9f6] py-6 px-9 sm:px-20 space-y-2 text-[0.720rem] sm:text-[0.920rem]">
        <p className="flex items-center gap-1 text-[0.878rem] font-bold">
          <MdLock />
          Secure Area
        </p>
        <div className="flex">
          {["Privacy", "Security", "Your Privacy Choices"].map(
            (value, index) => (
              <div key={index} className="text-blue-700 flex gap-3">
                {value}
                {value === "Your Privacy Choices" ? "" : <p className="h-3.5 mt-1.5 border mr-4"></p>}
              </div>
            )
          )}
        </div>
        <h1>Bank of America, N.A Member FDIC. <span>Equal Housing Lender</span></h1>
        <p className="-mt-3">&copy; 2025 Bank of America Corporation</p>
      </div>
    </header>
  );
};

export default Login;