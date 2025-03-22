import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex justify-center">
      <div className="flex flex-col justify-center text-center">
        <div className="text-[20px]">Have a project in mind?</div>
        <div
          className="text-[36px] font-extrabold cursor-pointer hover:underline"
          onClick={() => window.open("mailto:prakashshaw099@gmail.com")}
        >
          prakashshaw099@gmail.com
        </div>
        <div className="text-[20px]">
          {date.getFullYear()} © All Rights Reserved
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
