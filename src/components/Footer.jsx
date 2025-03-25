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
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
        </ul>
        <ul className="flex justify-center gap-4.5">
          <li>
            <IoLogoInstagram size={30} />
          </li>
          <li>
            <FiTwitter size={30} />
          </li>
          <li>
            <CiLinkedin size={32} />
          </li>
        </ul>
        <div className="text-center mt-16">
          Copyright © {date?.getFullYear()} | Prakash Shaw
        </div>
      </div>
    </footer>
  );
};

export default Footer;
