import React from "react";

const ExperenceAndEducation = () => {
  const skills = [
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "NextJs",
    "HTML",
    "CSS",
    "BootStrap",
    "TailWind",
    "Redux",
    "GIT",
    "API-Integration",
    "Problem-Solving",
    "User-InterFace",
    "Debugging",
  ];

  return (
    <section className="h-[100vh]">
      <div className="flex justify-around">
        <div>
          <div className="text-[80px] font-semibold">Experience</div>
          <div className="text-[26px]">
            Jurnior Software Engineer @{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => window.open("https://www.fermioninfotech.com/")}
            >
              Fermion InfoTech
            </span>
          </div>
          <div className="text-[18px]">
            October 2022 – October 2024 | Vashi, Maharashtra, India
          </div>
          <div className="text-[16px] border-l-2 pl-6">
            <div className="flex relative">
              <div className="bg-white size-3.5 rounded-full absolute left-[-32px] top-[6px] border-2"></div>
              <div>
                As a Junior Software Engineer, I’ve gained a year of practical
                experience in constructing dynamic and responsive web
                applications.
              </div>
            </div>
            <div className="flex relative">
              <div className="bg-white size-3.5 rounded-full absolute left-[-32px] top-[6px] border-2"></div>
              <div>
                My responsibilities involve utilizing HTML, CSS, JavaScript,
                ReactJS and NextJS to create visually appealing user interfaces.
              </div>
            </div>
            <div className="flex relative">
              <div className="bg-white size-3.5 rounded-full absolute left-[-32px] top-[6px] border-2"></div>
              <div>
                I integrate RESTful APIs from the backend to efferently fetch
                and manage data, ensuring seamless communication between the
                frontend and database.
              </div>
            </div>
            <div className="flex relative">
              <div className="bg-white size-3.5 rounded-full absolute left-[-32px] top-[6px] border-2"></div>
              <div>
                I focused on debugging, and adhering to coding standards, best
                practices and problem-solving.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[80px] font-semibold">Skill I Have</div>

          <div className="flex flex-wrap gap-3">
            {skills?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-[18px] py-[5px] text-[16px] bg-[#c6cccd] rounded-[20px] text-center"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-[80px] font-semibold">Education</div>
      <div className="text-[26px]">Bachelor of Science in Computer Science</div>
      <div className="text-[16px]">
        2019-2022 | S.K College of Science and Commerce (Mumbai University)
      </div>
    </section>
  );
};

export default ExperenceAndEducation;
