import React from "react";
import Link from "next/link";
import { MdOutlineExpandMore } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineTable,
  AiOutlineSetting,
  AiFillFileAdd,
} from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="w-[20%] max-h-max p-3 bg-gray-600 text-white">
      {/* Desktop */}
      <nav className="hidden lg:flex flex-col items-start gap-[1rem]">
        <Link href="" className="font-semibold">
          Dashboard
        </Link>
        <Link href="" className="font-semibold">
          Author
        </Link>
        <Link href="" className="font-semibold">
          Report
        </Link>
        <Link href="" className="font-semibold items-center flex gap-[1rem]">
          Setting
          <MdOutlineExpandMore />
        </Link>
      </nav>

      {/* Mobile */}
      <nav className="flex flex-col items-start gap-[1rem] lg:hidden">
        <Link href="" className="font-semibold">
          <AiOutlineHome className="text-white icon" />
        </Link>
        <Link href="" className="font-semibold">
          <AiOutlineTable className="text-white icon" />
        </Link>
        <Link href="" className="font-semibold">
          <AiFillFileAdd className="text-white icon" />
        </Link>
        <Link href="" className="font-semibold items-center flex gap-[5px]">
          <AiOutlineSetting className="text-white icon" />
          <MdOutlineExpandMore />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
