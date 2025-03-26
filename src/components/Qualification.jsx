import React, { useState } from "react";
import { PiSuitcase } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";

const Qualification = () => {
  const [isActive, setIsActive] = useState("education");

  const infoData = {
    experience: [
      {
        id: 1,
        category: "experience",
        name: "Fermion InfoTech",
        title: "Jr. Software Engineer",
        subTitle: "Full-Time",
        year: "2022 - 2024",
      },
    ],
    education: [
      {
        id: 1,
        category: "education",
        name: "S.K College of Science and Commerce",
        title: "B.sc - Computer Science",
        subTitle: "CGPA - 8.63",
        year: "2022",
      },
      {
        id: 2,
        category: "education",
        name: "Terna Vidyalaya Science and Commerce",
        title: "Class - XII",
        subTitle: "Percentage - 49.08",
        year: "2019",
      },
      {
        id: 3,
        category: "education",
        name: "Terna Vidyalaya Science and Commerce",
        title: "Class - X",
        subTitle: "Percentage - 63",
        year: "2017",
      },
    ],
  };

  const infoHandler = (item) => {
    const { name, title, subTitle, year } = item;
    return (
      <div>
        <h3 className="font-semibold text-[16px]">{name}</h3>
        <h4 className="text-[14px]">{title}</h4>
        <p className="text-[10px]">{subTitle}</p>
        <div className="flex items-center gap-1.5 text-[10px]">
          <FaRegCalendarAlt />
          {year}
        </div>
      </div>
    );
  };
  return (
    <section id="qualification" className="pt-8 mb-16">
      <h2 className="text-4xl text-center font-semibold">Qualification</h2>
      <div className="mb-12 text-center">My Personal Journey</div>
      <div
        id="qualification-tab"
        className="mx-8 mb-8 flex justify-center gap-4 md:gap-10"
      >
        <div
          className={`flex justify-center items-center gap-1.5 cursor-pointer font-semibold ${
            isActive === "education" ? "text-primary" : ""
          }`}
          onClick={() => setIsActive("education")}
        >
          <HiOutlineAcademicCap size={28} />
          Eduction
        </div>
        <div
          className={`flex justify-center items-center gap-1.5 cursor-pointer font-semibold ${
            isActive === "experience" ? "text-primary" : ""
          }`}
          onClick={() => setIsActive("experience")}
        >
          <PiSuitcase size={26} />
          Experience
        </div>
      </div>
      <div className="md:mx-32">
        {infoData[isActive]?.map((item, index) => {
          if (isActive === item?.category) {
            return (
              <div
                key={item?.id}
                className="grid grid-cols-[1fr_max-content_1fr] gap-6 mx-8"
              >
                {index % 2 === 0 ? infoHandler(item) : <div></div>}

                <div className="border-l-[1px] relative">
                  <div className="size-3.5 bg-gray-500 rounded-full absolute bottom-0 left-[-8px]"></div>
                </div>
                {index % 2 !== 0 ? infoHandler(item) : <div></div>}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Qualification;
