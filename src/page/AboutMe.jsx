import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me" className="h-[100vh] mx-5">
      <div className="text-3xl mb-3">
        I believe in a user centered design approach, ensuring that every
        project I work on is tailored to meet the specific needs of its users.
      </div>
      <div className="mb-2">This is me.</div>
      <hr className="mb-6 opacity-[0.1]" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-5xl mb-3.5">Hi, I'm Prakash.</div>
        <div>
          <div className="text-[20px] mt-2.5">
            I'm a frontend web developer dedicated to turning ideas into
            creative solutions. I specialize in creating seamless and intuitive
            user experiences.
          </div>
          <div className="text-[20px] mt-2.5">
            My approach focuses on creating scalable, high-performing solutions
            tailored to both user needs and business objectives. By prioritizing
            performance, accessibility, and responsiveness, I strive to deliver
            experiences that not only engage users but also drive tangible
            results.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
