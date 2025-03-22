import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="text-[30px]">
        Portfoli<span className="text-[#2596be]">o</span>
      </div>
      <ul className="flex gap-x-[100px]">
        <li className="hover:text-[#2596be] cursor-pointer text-[20px] font-semibold">
          Home
        </li>
        <li className="hover:text-[#2596be] cursor-pointer text-[20px] font-semibold">
          Projects
        </li>
        <li className="hover:text-[#2596be] cursor-pointer text-[20px] font-semibold">
          About
        </li>
        <li className="hover:text-[#2596be] cursor-pointer text-[20px] font-semibold">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
