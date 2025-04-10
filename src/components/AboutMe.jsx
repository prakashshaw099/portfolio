import { PiSuitcase } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { FiDownload } from "react-icons/fi";

const AboutMe = () => {
  return (
    <section id="about" className="pt-8 pb-16 lg:pt-16">
      <h1 className="text-center text-4xl font-semibold">About Me</h1>
      <div className="text-center text-[14px] mb-12">My Introduction</div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 md:mx-7">
        <div className="flex justify-center">
          <div
            id="my-photo"
            className="w-[220px] h-[max-content] overflow-auto rounded-3xl md:w-[300px]"
          >
            <img
              src="/assets/my-photo.jpeg"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div>
          <div className="pb-8 flex justify-center gap-4 md:justify-evenly">
            <div className="flex flex-col items-center py-6 px-4 bg-white border-2 border-[#0000001a] rounded-2xl">
              <PiSuitcase size={20} />
              <h3>Experience</h3>
              <p>2+ years</p>
            </div>
            <div className="flex flex-col items-center py-6 px-4 bg-white border-2 border-[#0000001a] rounded-2xl">
              <SlBadge size={20} />
              <h3>Completed </h3>
              <p>5+ Projects</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 px-12 text-center md:text-start">
            <p className="">
              Hi Everyone! My name is Prakash Shaw, and I am a Junior Software
              Engineer with two years of experience at Fermion InfoTech. I have
              a passion for leveraging logic and code to bring innovative ideas
              to life. Currently, I specialize in React.js, focusing on building
              dynamic, responsive, and visually appealing UI/UX designs and
              websites.
            </p>
            <p className="mb-8">
              Beyond coding, I am also an avid finance enthusiast with a keen
              interest in market trends and investment.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1wFiabD6osCXYABuJr5rV6-KS1mVTGk-n/view"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-[188px] h-[48px] animate-btn"
              >
                Download CV <FiDownload size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
