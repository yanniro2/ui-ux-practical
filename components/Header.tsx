import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
const Header = () => {
  return (
    <div className="w-screen p-3 flex items-center justify-between bg-blue-100 ">
      <FiMenu className="icon font-bold" />
      <h1 className="text-[1.2rem] font-semibold text-blue-500">Welcome</h1>

      <div className="flex items-center gap-[1rem]">
        <FaUserCircle className="icon text-blue-500" />
        <button className="py-3 px-6 bg-blue-500 rounded-md text-white font-semibold md:block sm:hidden hidden lg:block">
          logout
        </button>

        <button className="block md:hidden">
          <ImExit className="icon text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default Header;
