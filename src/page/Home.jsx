import React from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/introSection/IntroSection";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <IntroSection />
      <AboutMe />
      {/* <ExperenceAndEducation /> */}
      <hr className="mb-6 opacity-[0.1]" />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
