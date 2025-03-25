import React from "react";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "Bootstrap" },
    { id: 4, name: "Tailwind" },
    { id: 5, name: "Javascript" },
    { id: 6, name: "React" },
    { id: 7, name: "Redux" },
    { id: 8, name: "Git" },
  ];
  return (
    <section id="skills" className="pt-8 mb-16">
      <h2 className="text-4xl text-center font-semibold">Skills</h2>
      <div className="mb-12 text-center">My Technical Skillset</div>
      <div className="mx-12 px-8 py-8 grid grid-cols-2 gap-14 md:grid-cols-5 md:mx-18">
        {skills?.map((item) => {
          return (
            <div key={item?.id} className="flex flex-col justify-end ">
              <div className="flex justify-center mb-2.5">
                <div className="w-[70px]">
                  <img src={`/assets/skillIcons/${item?.name}.png`} />
                </div>
              </div>
              <div className="text-center">{item?.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
