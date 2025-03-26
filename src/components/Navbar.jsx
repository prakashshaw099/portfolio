import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiNewspaperClipping } from "react-icons/pi";
import { MdOutlinePhoto } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      {!isOpen ? (
        <div className="duration-400 h-14 px-3.5 bg-[#faf8f7] fixed bottom-0 left-0 right-0 z-50 border-t-4 border-[#f7f3f1] flex justify-between items-center">
          <a href="#home">
            Portfoli<span className="text-primary">o</span>
          </a>
          <IoMdMenu size={28} onClick={() => setIsOpen(true)} />
        </div>
      ) : (
        <div className="duration-400 h-[210px] px-2.5 bg-[#faf8f7] fixed bottom-0 left-0 right-0 z-50 border-t-4 border-[#f7f3f1] rounded-3xl">
          <ul className="grid grid-cols-3 justify-center gap-6 px-6 py-8">
            <li className="cursor-pointer">
              <a href="#about">
                <BsPerson size={20} />
                <div className="text-[12px]">About Me</div>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#qualification">
                <HiOutlineAcademicCap size={20} />
                <div className="text-[12px]">Qualifications</div>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#skills">
                <PiNewspaperClipping size={20} />
                <div className="text-[12px]">Skills</div>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#portfolio">
                <MdOutlinePhoto size={20} />
                <div className="text-[12px]">Portfolio</div>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#contact">
                <GoPaperAirplane size={20} />
                <div className="text-[12px]">Contact Me</div>
              </a>
            </li>
          </ul>
          <div className="flex justify-end cursor-pointer pr-1.5">
            <RxCross2 size={30} onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
