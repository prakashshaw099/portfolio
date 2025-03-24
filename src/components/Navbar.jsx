import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerIsOpen, setHamburgerMIsOpen] = useState(false);

  const menuData = [
    { id: "11", name: "Home", url: "/" },
    { id: "22", name: "Project", url: "/project" },
    { id: "33", name: "About Me", url: "/#about-me" },
    { id: "44", name: "Contact", url: "/contact" },
  ];
  return (
    <>
      <nav className="md:hidden">
        <div
          className={`w-[100vw] h-[100vh] z-50 pt-5 pl-5 pr-5 absolute bg-white ${
            !hamburgerIsOpen ? "hidden" : ""
          }`}
        >
          <div className="flex justify-between">
            <div className="text-[30px]">
              Portfoli<span className="text-[#2596be]">o</span>
            </div>
            <RxCross1
              size={40}
              onClick={() => {
                setHamburgerMIsOpen(false);
              }}
            />
          </div>
          <ul className="flex flex-col gap-[20px] pt-10">
            {menuData?.map((item) => {
              return (
                <a
                  href={item?.url}
                  key={item?.id}
                  onClick={() => {
                    setHamburgerMIsOpen(false);
                  }}
                >
                  <li className="hover:text-[#2596be] cursor-pointer text-[20px] font-semibold">
                    <div className="flex gap-2.5 items-center">
                      <div className="bg-white size-3.5 rounded-full left-[-32px] top-[6px] border-2"></div>
                      {item?.name}
                    </div>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-between pt-5 pl-5 pr-5">
          <div className="text-[30px]">
            Portfoli<span className="text-[#2596be]">o</span>
          </div>

          <GiHamburgerMenu
            size={40}
            onClick={() => {
              setHamburgerMIsOpen(true);
            }}
          />
        </div>
      </nav>
      <nav className="hidden md:block">
        <div className="flex justify-between items-center px-5 pt-5 ">
          <div className="text-[30px]">
            Portfoli<span className="text-[#2596be]">o</span>
          </div>
          <ul className="flex  gap-[100px]">
            {menuData?.map((item) => {
              return (
                <Link to={item?.url} key={item?.id}>
                  <li className="hover:text-[#2596be] cursor-pointer text-[20px] font-semibold">
                    {item?.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
