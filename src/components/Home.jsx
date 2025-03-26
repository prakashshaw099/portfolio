import React from "react";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { SlMouse } from "react-icons/sl";
import { IoIosArrowRoundDown } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section
      id="home"
      className="relative"
      // style={{ gridTemplateColumns: ".8fr 3fr" }}
    >
      <div className="bg-[#faf8f7] z-50 hidden lg:block md:fixed md:left-0 md:right-0">
        <nav className="flex justify-between pt-6 pb-2 px-[150px] ">
          <div className="text-[18px]">
            <a href="#home">
              Portfoli<span className="text-primary">o</span>
            </a>
          </div>
          <ul className="flex gap-4">
            <li className="text-[14px] animate-text">
              <a href="#about">About Me</a>
            </li>
            <li className="text-[14px] animate-text">
              <a href="#qualification">Qualification</a>
            </li>
            <li className="text-[14px] animate-text">
              <a href="#skills">Skills</a>
            </li>
            <li className="text-[14px] animate-text">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="text-[14px] animate-text">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-1 gap-16 pt-10 pb-12">
        <div className="grid grid-cols-[0.8fr_3fr] pt-8 mb-16 mx-5 gap-6 md:grid-cols-[130px_repeat(2,1fr)] md:pt-14">
          <div
            id="social-media"
            className="flex flex-col justify-start items-center gap-8.5 p-4"
          >
            <a
              href="https://www.geeksforgeeks.org/user/prakashshaw1577"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGeeksforgeeks size={22} className="animate-text" />
            </a>
            <a
              href="https://www.linkedin.com/in/prakashshaw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} className="animate-text" />
            </a>
            <a
              href="https://github.com/prakashshaw099"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={22} className="animate-text" />
            </a>
          </div>
          <div
            id="my-photo"
            className="w-[200px] h-[max-content] overflow-auto rounded-4xl md:order-last md:w-[240px]"
          >
            <img
              src="/assets/my-photo.jpeg"
              className="w-full h-full object-contain"
            />
          </div>
          <div id="intro" className="col-span-2 self-center pl-4 md:col-span-1">
            <h1 className="text-3xl font-semibold mb-1">Prakash Shaw 🖐️</h1>
            <h3 className="mb-4 flex justify-start items-center gap-1">
              <hr className="w-[70px]" />
              Jr. Software Engineer
            </h3>
            <div className="flex items-end gap-2.5 mb-2">
              <div className="text-[16px]">I am a</div>

              {/* <div > */}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Jr. Software Engineer",
                  1500,
                  "Front-End Developer",
                  1500,
                  "Web Developer",
                  1500,
                  "Coder",
                  1500,
                ]}
                speed={30}
                className="text-primary text-[20px]"
                repeat={Infinity}
              />
              {/* </div> */}
            </div>
            <p className="mb-6 md:text-[14px]">
              I’m a Jurnior software developer and here is my portfolio website.
              Have a look at my journey as a Jurnior software developer and all
              of my project works to learn more about me.
            </p>
            <a href="#contact" className="w-[150px] h-[44px] animate-btn">
              Say Hello <PiPaperPlaneTiltBold className="text-white" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-start items-center gap-1.5">
            <SlMouse size={30} />{" "}
            <span className="text-[14px]">Scroll Down</span>{" "}
            <IoIosArrowRoundDown size={18} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
