import React from "react";
import workingMan from "../../assets/workingMan.png";
import { MdDownload } from "react-icons/md";
import { BsChevronCompactDown } from "react-icons/bs";

const IntroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-[10px] justify-center ml-5 mr-5 md:grid-cols-2">
        <div className=" flex flex-col justify-center">
          <div className="text-[50px] font-semibold md:text-[50px] lg:text-[70px]">
            About <span className="text-primary">Me</span>
          </div>
          <div className="text-[20px] md:text-[25px] lg:text-[30px]">
            I'm Prakash Shaw, Frontend Developer from Navi Mumbai, India
          </div>
          <div>
            I specialize in developing scalable and responsive web applications,
            excelling in building dynamic UI components with React.js.
            Proficient in state management (Redux), API integration, and
            performance optimization to ensure seamless user experiences.
          </div>
          <div className="flex gap-5 mt-5 md:mt-8">
            <div
              onClick={() =>
                window.open(
                  "mailto:prakashshaw099@gmail.com?subject=Let's collaborate on a project&body=Hi Prakash, I am reaching out to you because..."
                )
              }
              className="cursor-pointer border-2 border-primary bg-primary px-[30px] py-[10px] rounded-[5px] text-white hover:text-primary hover:bg-white"
            >
              Hire Me
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1wFiabD6osCXYABuJr5rV6-KS1mVTGk-n/view?usp=drive_link"
                );
              }}
              className="flex justify-center items-center gap-1 cursor-pointer border-primary border-2 text-primary px-[30px] py-[10px] rounded-[5px] hover:bg-primary hover:text-white"
            >
              <div>Resume</div> <MdDownload />
            </div>
          </div>
        </div>
        <div className="w-[350px] order-first ml-auto mr-auto md:order-last md:w-[350px] lg:w-[450px]">
          <img src={workingMan} width="100%" />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-center mt-6">
          <BsChevronCompactDown
            size={100}
            className="opacity-5 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
