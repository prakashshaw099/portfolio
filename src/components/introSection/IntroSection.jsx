import React from "react";
import workingMan from "../../assets/workingMan.png";
import { MdDownload } from "react-icons/md";
import { FaAnglesDown } from "react-icons/fa6";
import { BsChevronCompactDown } from "react-icons/bs";

const IntroSection = () => {
  return (
    <section>
      <div className="flex gap-[150px] mt-[40px] justify-center">
        <div className="w-[70%] flex flex-col justify-center">
          <div className="text-[70px] font-semibold">
            About <span className="text-[#2596be]">Me</span>
          </div>
          <div className="text-[30px]">
            I'm Prakash Shaw, Frontend Developer from Navi Mumbai, India
          </div>
          <div>
            I specialize in developing scalable and responsive web applications,
            excelling in building dynamic UI components with React.js.
            Proficient in state management (Redux), API integration, and
            performance optimization to ensure seamless user experiences.
          </div>
          <div className="flex gap-5 mt-[50px]">
            <button className="border-2 border-[#2596be] bg-[#2596be] px-[30px] py-[10px] rounded-[5px] text-[#fff] hover:text-[#2596be] hover:bg-[#fff]">
              Hire Me
            </button>
            <div className="flex justify-center items-center gap-1 border-[#2596be] border-2 text-[#2596be] px-[30px] py-[10px] rounded-[5px] hover:bg-[#2596be] hover:text-[#fff]">
              <div>Resume</div> <MdDownload />
            </div>
          </div>
        </div>
        <div>
          <img src={workingMan} width="100%" />
        </div>
      </div>
      <div className="flex justify-center">
        {/* <FaAnglesDown /> */}
        <BsChevronCompactDown size={100} className="opacity-5" />
      </div>
    </section>
  );
};

export default IntroSection;
