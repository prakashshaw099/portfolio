import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const date = new Date();
  return (
    <footer id="footer">
      <div className="px-6 pt-8 pb-16 bg-white border-t-2 border-[#0000001a]">
        <h1 className="text-center text-2xl mb-8">Prakash Shaw</h1>
        <ul className="flex justify-center gap-4.5 mb-8">
          <li className="text-[14px] animate-text">
            <a href="#about">About</a>
          </li>
          <li className="text-[14px] animate-text">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-[14px] animate-text">
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <ul className="flex justify-center gap-4.5">
          <li className="animate-text">
            <a
              href="https://www.instagram.com/prakashhh._.x/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={26} />
            </a>
          </li>
          <li className="animate-text">
            <a
              href="https://x.com/PrakashShaw1577"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter size={26} />
            </a>
          </li>
          <li className="animate-text">
            <a
              href="https://www.linkedin.com/in/prakashshaw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin size={28} />
            </a>
          </li>
        </ul>
        <div className="text-center mt-16 text-[14px]">
          Copyright © {date?.getFullYear()} | All rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
