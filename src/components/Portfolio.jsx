import React from "react";
import { PiSuitcase } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-8">
      <h2 className="text-4xl text-center font-semibold">Portfolio</h2>
      <div className="mb-12 text-center">My Projects</div>
      <div className="m-[100px_24px_32px_24px] grid grid-cols-1 gap-7 md:grid-cols-[repeat(2,_270px)] md:justify-center md:m-[144px_24px_32px_24px]">
        <div className="grid grid-cols-1 p-[56px_64px_20px_32px] bg-white border-2 border-[#0000001a] rounded-2xl md:p-[88px_0px_32px_32px]">
          <PiSuitcase size={20} className="mb-4" />
          <h3 className="mb-2 text-[20px] font-semibold">Weather App</h3>
          <div className="flex items-center gap-2.5 ">
            view more <IoIosArrowRoundForward />
          </div>
        </div>
        <div className="grid grid-cols-1 p-[56px_64px_20px_32px] bg-white border-2 border-[#0000001a] rounded-2xl md:p-[88px_0px_32px_32px]">
          <PiSuitcase size={20} className="mb-4" />
          <h3 className="mb-2 text-[20px] font-semibold">Weather App</h3>
          <div className="flex items-center gap-2.5 ">
            view more <IoIosArrowRoundForward />
          </div>
        </div>
        <div className="grid grid-cols-1 p-[56px_64px_20px_32px] bg-white border-2 border-[#0000001a] rounded-2xl md:p-[88px_0px_32px_32px]">
          <PiSuitcase size={20} className="mb-4" />
          <h3 className="mb-2 text-[20px] font-semibold">Weather App</h3>
          <div className="flex items-center gap-2.5 ">
            view more <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
